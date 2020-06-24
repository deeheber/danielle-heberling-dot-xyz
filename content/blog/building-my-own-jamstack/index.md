---
title: Building My Own Jamstack
date: "2020-06-26T22:12:03.284Z"
---

As the frontend and backend are slowly merging closer together, more and more folks are writing full stack applications. While Serverless mostly is referring to the underlying infrastructure that tends to live a bit closer to the backend side, you can also use a serverless architecture to build and deploy the frontend portion of your application.

## What We're Building
<a href="https://www.danielleheberling.xyz/blog/text-to-speech/" target="_blank" rel="noopener noreferrer">Previously</a>, I wrote an application that translates written text to speech. I was getting tired of having to recall the different API endpoints to hit and wanted a nice UI to better manage these files...so I got to work on building a frontend.

I decided to keep it simple/minimal in style as this is for personal use...so here’s how it ended up looking at the end.

![Finished frontend](./finishedFrontend.png)

## Initial Setup
I started by adding an s3 bucket titled “FrontEnd” and enabled website hosting. In between my FrontEnd s3 bucket and my API gateway resource, I added the PopulateFrontend Lambda function to bridge the two resources together.

We’ll go more into detail on this later, but this Lambda function’s purpose is to build deploy the frontend part of the application everytime there is a deploy of the stack.

Also since we’re now going to be using a browser to make requests to the backend API, <a href="https://github.com/deeheber/text-to-speech-converter/blob/blog-post-2/template.yaml#L37" target="_blank" rel="noopener noreferrer">I enabled cors on my API gateway endpoints</a> and <a href="https://github.com/deeheber/text-to-speech-converter/blob/blog-post-2/src/ConvertToAudio/index.js#L65" target="_blank" rel="noopener noreferrer">ensured my backend Lambdas allowed cors in their headers on each return</a>.

Here’s how the visualization of the completed stack looks.

![Finished stack](./fullstackApp.png)

## Populate Frontend - Custom Resource
There are a few ways you could go about automating the build/deploy of your frontend. After thinking through different options, I finally decided to use a <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html" target="_blank" rel="noopener noreferrer">CloudFormation Custom Resource</a>. The YAML for my custom resource in the `template.yaml` file looks like this:

```
 PopulateFrontendDeployTrigger:
    Type: Custom::FunctionDeployTrigger
    Properties:
      ServiceToken: !GetAtt PopulateFrontend.Arn
      DeploymentTimestamp: !Ref DeploymentTimestamp
```

So when the Type property starts with Custom::, CloudFormation then looks at the ServiceToken field and sends a request to the resource specified on every deploy. In this case, the requests will go to my PopulateFrontend function. Anything after Custom:: can be whatever you'd like. Personally, I'd suggest naming it something that makes sense as to what it does...but that's totally up to you.

When using custom resources, it is very important to send back success and failure messages from the resource that was requested by CloudFormation. If you do not do this, then often times CloudFormation will hang for hours in a state that is difficult to exit. There are a few ways to go about doing this, but I decided to use the <a href="https://www.npmjs.com/package/cfn-custom-resource" target="_blank" rel="noopener noreferrer">cfn-custom-resource npm package</a>. Here is where I’m using this library to send my success or error message response back to CloudFormation: https://github.com/deeheber/text-to-speech-converter/blob/blog-post-2/src/PopulateFrontend/index.js#L25-L30.

## Populate Frontend - Contents
Now that you know about custom resources and how they work, let’s dig a little deeper into what the PopulateFrontend function is doing and how.

So on every deploy this function is triggered via the request sent to the function ARN from our custom CloudFormation resource. When triggered it does the following to build and deploy our frontend.

1. Copies the frontend files to the Lambda `/tmp` folder
2. Grabs the API url from the function’s environment variable
3. Writes the API url to a config file (this is needed for the frontend to be able to talk to the backend)
4. Runs `npm install` and `npm build`
5. Npm build puts all of the built files in a folder called `/build`, so we then send all of those built files to our FrontEnd s3 bucket. Since the s3 bucket is enabled to static website hosting, it should “just work.”

Here's the final code for that function if you'd like to take a look: https://github.com/deeheber/text-to-speech-converter/blob/blog-post-2/src/PopulateFrontend/index.js

## More on the Config File
I could’ve easily used another http request library such as <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">Axios</a>, but since AWS Amplify has a <a href="https://www.npmjs.com/package/aws-amplify" target="_blank" rel="noopener noreferrer">nice library</a> that works well with sending http requests to API Gateway, I decided to go that route. Side plug...it also works well with GraphQL/AWS AppSync if http is not your preference.

In order to make calls to my API Gateway http endpoints via this framework, I need to feed it the `API_URL` in a config file, so I utilized the PopulateFrontend function to grab this url and write it into a config file on every deploy. It might be a tad bit overkill, but if I’m deploying to different environments I won’t need to think twice about this configuration...it’ll already be done for me.

As a note, if you want to work on the react frontend locally, you’ll need to add a config.js file in src/PopulateFrontend/frontend-content/src that looks something like this:

```
export default {
 backendAPI: 'ENTER YOUR API GATEWAY URL HERE'
};
```

## Closing
Hopefully this post gave you a nice example of how to implement an automated build/deploy of your frontend code with every stack deploy. You can see all of the code I referenced this this post here: https://github.com/deeheber/text-to-speech-converter/tree/blog-post-2.

If you want something more customized or complex, I’d recommend checking out AWS’s <a href="https://aws.amazon.com/codebuild/" target="_blank" rel="noopener noreferrer">code-build</a> and/or <a href="https://aws.amazon.com/codepipeline/" target="_blank" rel="noopener noreferrer">code-pipeline</a> services. If time permits, perhaps I’ll do another blog post or posts on those services.
