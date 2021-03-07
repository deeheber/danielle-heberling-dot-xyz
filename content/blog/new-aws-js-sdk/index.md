---
title: Upgrading to the AWS SDK for JavaScript v3
date: "2021-02-04T22:12:03.284Z"
---

![Three Dice](./three-dice.jpg)

In December 2020, AWS announced <a href="https://aws.amazon.com/blogs/developer/modular-aws-sdk-for-javascript-is-now-generally-available/" target="_blank" rel="noopener noreferrer">general availability</a> of version 3 of their SDK for JavaScript. I decided to take some time to experiment and see what's changed.

## What's New?

There are lots of new features in this release. Here's the new features that I've seen highlighted the most.

1. **Modular Packages**

In prior versions, we'd just `npm install` the entire `aws-sdk` package and everything was in there. Now the sdk is split among multiple npm packages. Just install the packages that you need to use for your application. This is a big win for being able to get those code bundle sizes down.

2. **Middleware Stack**

The Middleware Stack gives developers more control over the lifecycle of the requests sent via the aws-sdk. My internal mental reaction is similar to how I felt after hearing the <a href="https://aws.amazon.com/blogs/compute/introducing-aws-lambda-extensions-in-preview/" target="_blank" rel="noopener noreferrer">AWS Lambda Extensions announcement</a>. It seems interesting, but I'm not quite sure what I'd do with it. That doesn't mean this isn't an exciting feature to someone else.

3. **First Class TypeScript Support**

TypeScript is growing in popularity, so it seems fitting that AWS would continue the trend. As someone who recently started using TypeScript, this is pretty exciting.

## Let's See Some Code!
Because I was curious about how everything might look in v3, I experimented by converting a minimally featured CRUD api to use the new version. Check out the <a href="https://github.com/deeheber/note-service/blob/master/README.md" target="_blank" rel="noopener noreferrer">README</a> to see the high level architecutre of the app. And <a href="https://github.com/deeheber/note-service/pull/4/files" target="_blank" rel="noopener noreferrer">here's the git diff</a> when converting from the sdk v2 to v3.

Since DynamoDB is my database in this app, I went looking for the v3 equivalent of the <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html" target="_blank" rel="noopener noreferrer">DynamoDB document client</a> that strips out the DynamoDB types and makes things more human readible. I found some mixed messaging on the official AWS Github repo for the JavaScript SDK and my overall takeway is that originally an AWS employee said they'd port it over, now it looks like that probably won't happen. My personal opinion is that they could've done a better job communicating <a href="https://github.com/aws/aws-sdk-js-v3/issues/1223" target="_blank" rel="noopener noreferrer">in this issue</a> filed on Github.

Anyway long story short, I found I was able to get the same result by marshalling and unmarshalling JavaScript objects/DynamoDB Records in the code. Info on that can be found in the docs for the `util-dynamodb` package <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_util_dynamodb.html" target="_blank" rel="noopener noreferrer">here</a>. Another example can also be found in my git diff mentioned above.

> Post update March 7, 2021
> Looks like there's now a <a href="https://github.com/aws/aws-sdk-js-v3/pull/2097" target="_blank" rel="noopener noreferrer">DynamoDB Document Client</a> 😀.

## What's Next?
Out of caution, I plan to wait for things to settle a bit more before doing upgrades on major business critical applications.

This has been a fun experiment to see what's changed, what stayed the same, and what I can look forward to in the future. Overall, I felt like AWS did a great job with this rewrite.

What are your thoughts on the update? Have any fun use case ideas with the new middleware stack feature? Let me know!
