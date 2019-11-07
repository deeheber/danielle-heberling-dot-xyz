---
title: AWS Amplify Review
date: "2019-11-06T22:12:03.284Z"
---

![Glasses](./glasses.jpg)
>Photo by Kevin Ku on Unsplash

Recently, I’ve been playing around with <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer">AWS Amplify</a>. Wanted to share some thoughts in case anyone is interested in exploring this ecosystem. Disclaimer that these are my opinions and experiences. You may have a different one. This is ok.

#### Why Did I Do this?
If you talked to me three years ago, I would’ve labeled myself as a software engineer who specializes in frontend. I embraced this label until I was introduced to the world of serverless. All of a sudden I realized that I could write infrastructure as code to use managed services for more powerful systems. Systems that would auto scale to accommodate various workloads while not having to reinvent the whell. No longer did I need to be incredibly bored writing Dockerfiles and orchestrating clusters of containers. 

Disclaimer that serverless is much much more than auto scale and utilizing managed services, but this blog post isn’t on that topic. I highly recommend <a href="https://read.acloud.guru/serverless-is-a-state-of-mind-717ef2088b42" target="_blank" rel="noopener noreferrer">this blog post</a> if you want to get into that topic. Also disclaimer about Docker/containers etc. I have a strong belief that you should use the right tool for the job and sometimes that tool happens to be containers. Just from my personal experience, I haven’t gotten that much joy out of writing Dockerfiles etc.

This world of serverless also brought along a heavy focus on  using and learning about various AWS services. It’s been a fun ride, but I do still find myself enjoying jumping into the frontend of an application every now and then, so the aws-amplify NPM  package was a great utility library to use when connecting my frontend to various AWS services. With all of the new features of AWS Amplify Console, I decided to take a deeper look to see what this ecosystem is like.

#### What I Built
Since I learn best by doing, I decided to build the classic TODO application with AWS Amplify. This would utilize CRUD (create, read, update, delete) endpoints talking to my <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> frontend. As a bonus, I decided to add authentication. Authentication and Cognito are two things that have always been pretty difficult to implement. This seems to be true with some of my conversations with pretty senior Software Engineers too.

#### GraphQL API
When first setting up the API, I noticed an option for <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">GraphQL</a>...I figured why not let’s go down this journey even further. After a few prompts from the Amplify CLI and an `amplify push`...I had a CRUD GraphQL API setup complete with schema generation, mutations, queries, subscriptions, resolvers, and a dynamoDB table as my data source. If you would’ve asked me about some of those words a few months ago, I wouldn’t have been able to tell you what they mean...but AWS Amplify made it super easy to setup and deploy. I also enjoyed playing around in the appsync console creating test mutations  and queries to experiment more with GraphQL...really fun.

#### Setting up Authentication with Cognito User Pools
After getting a CRUD api setup for my TODO app, it was time to add authentication. This way someone would need to login to see the TODO items, and they could only create, read, update, and delete their own TODO items.

I first ran `amplify add auth` in the console and followed the prompts to get setup. There are options where you can authenticate with social media logins, but I decided to use Cognito User Pools. You can also customize the sign in workflow.

After another `amplify push`, I now needed to update my GraphQL schema to only allow the owner of the TODO item to CRUD it. Luckily AWS Amplify has an `@auth` directive that does just this.

Here’s what my schema looked like before:

```
type Todo @model {
  id: ID!
  name: String!
  complete: Boolean
}
```

And after

```
type Todo @model @auth(rules: [{allow: owner}]) {
  id: ID!
  name: String!
  complete: Boolean
}

```

You can also make this more complicated if you want. There are also the options to only allow specific groups, only allow certain types of operations (i.e. read, update etc), and add field level auth rules too. Probably more that I didn't end up using.

I also added a login screen by using the aws-amplify `withAuthenticator` higher order component. I chose not to customize it, but it is flexible to allow for customization (https://aws-amplify.github.io/docs/js/authentication#customize-withauthenticator). Overall it took me minutes to setup what once took me hours (and sometimes days) to do.

#### Frontend Deploy
To host the frontend on AWS, the choice most folks go with is uploading their frontend code to an S3 Bucket and sometimes adding a CloudFront CDN in front of the S3 Bucket. This seems like it should be simple to automate, but it really isn't quite yet. With Amplify it’s easy. All you need to do is `amplify add hosting` and `amplify publish` then you’re done! Much nicer than writing a <a href="https://www.danielleheberling.xyz/blog/deploy-frontend/" target="_blank" rel="noopener noreferrer">weird Lambda Function</a> to do this.

#### Summary
Amplify is a great choice if you want to get started with GraphQL/Appsync. It’s also good for frontend focused applications that needs to utilize backend built with AWS. Overall, I’d recommend it to folks who are new to AWS or seasoned folks who want to get a project up and running quickly. There are also great ci-cd tools you can use with the <a href="https://aws.amazon.com/amplify/console/" target="_blank" rel="noopener noreferrer">Amplify Console</a> which I didn’t touch on in this post. Major bonus that the examples in the AWS Amplify docs are using React hooks. 

A downsidee that I noticed was there didn’t seem to be any way to eject from the framework if down the line I decided I wanted to use <a href="https://aws.amazon.com/serverless/sam/" target="_blank" rel="noopener noreferrer">AWS SAM</a> or the <a href="https://serverless.com/" target="_blank" rel="noopener noreferrer">Serverless framework</a> instead. Also as someone who likes to understand how things work in the event of error messages...it seemed like AWS  Amplify performed a lot of “magic” under the hood and I could not discern how the framework was doing things. It would be cool if the framework did all the stuff it does and then gives an option to output a CloudFormation template or something.

Anyway give it a shot and let me know what you think. You won’t regret it. If you want to see my completed todo app, check it out here: https://github.com/deeheber/amplify-todo.
