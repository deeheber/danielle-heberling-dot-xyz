---
title: Upgrading to the AWS SDK for JavaScript v3
date: "2021-02-04T22:12:03.284Z"
---

![Three Dice](./three-dice.jpg)

In December 2020, AWS announced <a href="https://aws.amazon.com/blogs/developer/modular-aws-sdk-for-javascript-is-now-generally-available/" target="_blank" rel="noopener noreferrer">general availability</a> of version 3 of their SDK for JavaScript. I decided to take some time to experiment and see what's changed.

## New Features

There are lots of new features in this release. Here's the top three that I've seen spoken about the most.

1. **Modular packages**

In prior versions, we'd just `npm install` the entire `aws-sdk` package and everything was in there. Now the sdk is split among multiple npm packages. I see this as a big win for being able to get those code bundle sizes down. If you don't need it, it won't be imported into your application code.

2. **Middleware Stack**

The Middleware Stack gives developers more control over the lifecycle of the requests sent via the aws-sdk. To me this seems similar to the <a href="https://aws.amazon.com/blogs/compute/introducing-aws-lambda-extensions-in-preview/" target="_blank" rel="noopener noreferrer">recent AWS Lambda Extensions announcement</a>. It seems interesting, but I'm not quite sure what I'd do with it. That doesn't mean this isn't an exciting feature to someone else.

3. **First Class TypeScript Support**

TypeScript is growing in popularity, so it seems fitting that AWS would also follow suit.

## Let's See Some Code
Sure! Because I was curious about how everything might look in v3, I experimented by converting a simple CRUD api to use the new version. Check out the git diff <a href="https://github.com/deeheber/note-service/pull/4/files" target="_blank" rel="noopener noreferrer">on Github here</a>.

Since I was using DynamoDB as my database, I went looking for the v3 equivalent of the <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html" target="_blank" rel="noopener noreferrer">DynamoDB document client</a> that strips out the DynamoDB types and makes things more human readible. I found some mixed messaging on the Github repo for this project and my TL;DR takeway is that originally an AWS employee said they'd port it over, now it looks like that probably won't happen. My personal opinion is that they could've done a better job communicating this <a href="https://github.com/aws/aws-sdk-js-v3/issues/1223" target="_blank" rel="noopener noreferrer">in this issue</a> folks in the community filed on Github.

I found I was able to get the same result by marshalling and unmarshalling my JSON objects in the code. Info on that can be found in the docs for the `util-dynamodb` package <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_util_dynamodb.html" target="_blank" rel="noopener noreferrer">here</a>. Another example can also be found in my git diff mentioned above.

## What's Next
I personally don't plan up upgrading non-pet projects tomorrow and plan to wait a few months to see how things are settling.

This has been a fun experiment to see what's changed, what stayed the same, and what I can look forward to in the future. Overall, I felt like AWS did a great job with this rewrite.