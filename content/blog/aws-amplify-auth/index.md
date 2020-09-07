---
title: Using AWS Amplify To Authenticate Users
date: "2018-10-24T22:12:03.284Z"
---

![Amplify](./amplify.jpg)

So you want to use AWS Cognito to authenticate users and have your user pool, identity pool, and app client all set up in the AWS console. ...the next question is how can you connect this with your React based frontend? While there are a few ways to go about doing this, this post is going to give you a brief overview on how to do this via a library called <a href="https://aws-amplify.github.io/" target="_blank" rel="noopener noreferrer">AWS-Amplify</a>.

AWS-Amplify is an open source project managed by AWS described as “a declarative JavaScript library for application development using cloud services.” I liked this particular library, because it has a client first approach and abstracts away some of <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html" target="_blank" rel="noopener noreferrer">the setup</a> required in the JavaScript SDK.

My favorite features of Amplify are: Authentication (via <a href="https://aws.amazon.com/cognito/" target="_blank" rel="noopener noreferrer">Cognito</a>), API (via API Gateway), and Storage (via S3), but this library has a lot more to offer than just those features. This post will focus on how to authenticate users from a React based frontend...more specifically user signup that has an email address verification step.

#### The Setup

First you’ll need to setup a config file to reference your already created AWS resources (in this case the user pool, identity pool, and client id) in your /src folder. The `src/config.js` file will look something like this :

```javascript
export default {
   cognito: {
    REGION: ‘YOUR_COGNITO_REGION’,
    USER_POOL_ID: ‘YOUR_USER_POOL_ID’,
    APP_CLIENT_ID: ‘YOUR_APP_CLIENT_ID’,
    IDENTITY_POOL_ID: ‘YOUR_IDENTITY_POOL_ID’
  }
};
```

Then in your `src/index.js` file where you setup your react app, you’ll need to configure aws Amplify. It’ll look similar to this:

```javascript
import React from ‘react’;
import ReactDOM from ‘react-dom’;
import Amplify from ‘aws-amplify’;

import config from ‘./config’;
import App from ‘./App’;

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById(‘root’)
);
```

The `mandatorySignIn` property is optional, but is a good idea if you are using other AWS resources via Amplify and want to enforce user authentication before accessing those resources.

Also note that for now having a separate config file might seem a bit overkill, but once you add in multiple resources (i.e. Storage, API, Pub Sub etc.)  you’ll want that extra config file to keep things easy to manage.

#### Implementation Overview

The signup flow will look like this:
1. The user submits what they’ll use for login credentials (in this case email and password) via a signup form and a second form to type in a confirmation code will appear.
2. Behind the scenes the Amplify library will sign the user up in Cognito.
3. Cognito will send a confirmation code email to the user’s signup email address to verify that the email address is real.
4. The user will check their email > get the code > type the code into the confirmation form.
5. On submit, Amplify will send the information to Cognito which then confirms the signup. On successful confirmation, Amplify will sign the user into the application.

#### Implementation Part 1

First in your signup form component, you’ll need to import Auth from the Amplify library like this:

`import { Auth } from ‘aws-amplify’;`

As you create your form, I’d suggest using local component state to store the form data. It’ll look like your typical form with the difference being using the Amplify methods in your handleSubmit function whenever the user submits the form. The handleSubmit function will look like this:

```javascript
 handleSubmit = async event => {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: this.state.email,
        password: this.state.password
      });
      this.setState({
        newUser
      });
    } catch (event) {
      if (event.code === ‘UsernameExistsException’) {
        const tryAgain = await Auth.resendSignUp(this.state.email);
        this.setState({
          newUser: tryAgain
        });
      } else {
        alert(event.message);
      }
    }
  }
```

On success, Amplify returns a user object after the signUp method is called, so I’ve decided to store this object in my component local state so the component knows which form to render (the signup or the confirmation).

Before we continue let’s go over a quick edge case. So if our user refreshes the page when on the confirmation form and then tries to sign up again with the same email address, they’ll receive an error that the user already exists and will need to signup with a different email address. The catch block demonstrates one way of handling that possibility by resending the signup code to the user if that email is already present in Cognito. This will allow the user to continue using the same email address should they refresh the page or leave the site before entering the confirmation code.

#### Implementation Part 2

So now the user is looking at the confirmation form and has their confirmation code to type in. We’ll need to render the confirmation form. Similar to the signup form it’ll look like a typical form with the exception being the function that is called whenever the user submits the confirmation form. The handleSubmit function for the confirmation form will look similar to this when using Amplify:

```javascript
 handleConfirmationSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
      await Auth.signIn(this.state.email, this.state.password);

      this.props.isAuthenticated(true);
      this.props.history.push("/");
    } catch (event) {
      alert(event.message);
    }
  }
```

So it is taking in the form data, using Amplify to confirm the user’s email address via the conformation code and signing in the user if successful. You can then verify if a user is signed in via props at the route level if you’d like. In this case, I arbitrarily named it `isAuthenticated` and redirected the user to the root path.

The complete docs for using the Auth feature of Amplify can be <a href="https://aws-amplify.github.io/docs/js/authentication" target="_blank" rel="noopener noreferrer">found here</a>. We’ve only scratched the surface in this post, so go forth and explore the all of the different features that Amplify has to offer. I’ve found it has a very nice declarative syntax and is very readable for folks who are new to a codebase. For building further on your React-based serverless applications, I highly recommend Stackery for <a href="https://www.stackery.io/product/" target="_blank" rel="noopener noreferrer">managing all of your serverless infrastructure</a> backed up by seamless, git-based version control.

>Note: This post was originally published on https://www.stackery.io/
