---
title: The Problem with "It Works on My Computer"
date: '2023-03-20T10:12:03.284Z'
---

> Disclaimer: This is a highly opinionated post based off of my own experience. Your experience and opinions may differ and that is okay. I welcome your respectful and engaged conversation. Most of my cloud experience is with Amazon Web Services, so this post will be AWS heavy. A lot of this applicable to other cloud providers though.

## Scenario #1: Working on a serverless first team

Whenever we hire a new person regardless of how long they've been a professional software developer, if they're new to serverless the first question is often the same.

> "How do I run this locally on my computer?"

There are many tools out there that can emulate AWS on your laptop, but I've noticed some problems with this approach.

- The tools are not always accurate or up to date with the latest features available in the cloud.
- The environment locally vs in the cloud will be different. Some common examples include: environment variables, database connections, and permissions to access resources.
- Sometimes maintaining the tooling required for these emulation tools can be more work than deploying your changes and testing in a sandbox cloud account. A lot of them require knowledge of Docker and Docker networking. My biased opinion: at that point why go serverless in the first place?

## Scenario #2: Working on a non-serverless first team

Some companies use more traditional infrastructure such as EC2 instances and RDS. Running a local version of the Node.js server against a local Postgres database is great for fast, iterative development and works well most of the time.

Where this falls apart is when integrating another AWS service such as S3 in your stack. I've seen many times when software developers who do not have much cloud experience, but are great at writing code do the following:

1. Authenticate with AWS using credentials that give them administrative access to the entire account locally on their computer.
2. Run a server locally on their computer which uploads a file to an S3 bucket located in a non-prod AWS account.
3. It works!
4. They submit their code and it gets merged into the main branch.
5. The code gets deployed to a non-prod environment (staging or something similar).
6. They test uploading to the S3 bucket and it fails on the non-prod environment.
7. "I don't know what's going on because it worked locally for me!" 🤔

![Man looking confused>](./confused-face.jpg)

> Photo by <a href="https://unsplash.com/@sammywilliams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sander Sammy</a> on <a href="https://unsplash.com/photos/ufgOEVZuHgM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Someone more experienced with IAM pokes around AWS and realizes the permissions on the IAM role that the cloud server is using is not the same as the permissions on the IAM role that the developer is using locally on their computer. Permissions issues in the cloud get fixed. 🚀

## Unsolicited advice

1. Have a staging, test, and/or integration cloud environment where you can test code changes before deploying to prod. It's good to catch problems before your end users do. ❤️
2. If you're running servers locally as part of your development loop, authenticate locally using similar permissions that the production server uses. This will help catch permissions issues sooner. Giving yourself admin access might cause things to work locally but not when deployed. 🧐
3. If you're working on a serverless first team, I would recommend not running your application locally. Instead, deploy your code to a sandbox account and test it there. One AWS account per developer. This will help catch issues with permissions, environment variables, and other things that can cause differences between your local and cloud environments. It's also a great way to get more familiar with troubleshooting in the cloud. 🙌🏻

## Reflections

I've seen similar variations of these scenarios play out on many different teams at different companies. I think the reason is due to developers needing to change their mindset.

Because more software applications are utilizing managed cloud services, we must change our approach to development and acknowledge that the way we've always traditionally done things might no longer be the best way to do things.

Let's build better software together. Good luck out there. 💪🏻
