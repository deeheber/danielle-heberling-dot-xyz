---
title: Upgrading to the AWS SDK for JavaScript v3
date: "2021-02-04T22:12:03.284Z"
---

In December 2020, AWS announced <a href="https://aws.amazon.com/blogs/developer/modular-aws-sdk-for-javascript-is-now-generally-available/" target="_blank" rel="noopener noreferrer">general availability</a> of version 3 of their SDK for JavaScript.

## New Features
There are lots of exciting features in this major version rewrite. Including but not limited to:

1. **Modular packages**

In the past, we'd just import the entire aws-sdk npm package and everything was in there. Now the aws-sdk is split among multiple packages. Sure it's more import statements and has the potential for errors due to forgetting to import, but I see this as a major win for people looking to make their package sizes smaller. Only require what you need, nothing else comes along.

2. **Middleware Stack**

The Middleware Stack gives developers more control over the lifecycle of the requests sent via the aws-sdk. Tbh, it seems kinda confusing like Lambda extentions and I most likely won't have a use for it. That doesn't mean this isn't an exciting feature to someone else though.

3. **First Class TypeScript Support**

TypeScript is growing in popularity, so it seems fitting that AWS would also follow suit.

## Let's See Some Code
Sure! Because I was curious about how everything might look in v3, I experimented by converting a simple CRUD api to use the new version. Check out the git diff <a href="https://github.com/deeheber/note-service/pull/4/files" target="_blank" rel="noopener noreferrer">on Github here</a>.

Since I was using DynamoDB as my database, I went looking for the v3 equivalent of the <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html" target="_blank" rel="noopener noreferrer">DynamoDB document client</a> that strips out the DynamoDB types and makes things more human readible imo...no such luck. I found I was able to get the same result by marshalling and unmarshalling my JSON objects in the code. Info on that can be found in the docs for the `util-dynamodb` package <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_util_dynamodb.html" target="_blank" rel="noopener noreferrer">here</a>.

## My Upgrade Status
I personally don't plan up upgrading non-pet projects tomorrow, but probably will wait a few months to see how things are settling.

This has been a fun experiment to see what's changed, what stayed the same, and what I can look forward to in the future.