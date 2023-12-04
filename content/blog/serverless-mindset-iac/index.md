---
title: The Serverless Mindset and Infrastructure as Code
date: '2023-12-06T12:12:03.284Z'
---

![AWS Application Composer Canvas](./app-composer-canvas.png)

Originally I set out to write a blog post about my favorite [re:Invent](https://reinvent.awsevents.com/) announcements. But as I started, I saw a theme and decided to write on that instead.

_Disclaimer that this post contains my individual opinions and yours might differ. I welcome your polite/engaged feedback and encourage you to continue this conversation outside of reading this blog post._

## Announcements that fit the Theme

- [AWS Step Functions Workflow Studio is now available in AWS Application Composer](https://aws.amazon.com/blogs/aws/aws-step-functions-workflow-studio-is-now-available-in-aws-application-composer/)
- [AWS Application Composer IDE extension](https://aws.amazon.com/blogs/aws/ide-extension-for-aws-application-composer-enhances-visual-modern-applications-development-with-ai-generated-iac/)

## The Theme

As a software engineer in my `$day_job`, most tasks involve writing Infrastructure as Code (IaC). When reflecting on the [serverless mindset](https://ben11kehoe.medium.com/serverless-is-a-state-of-mind-717ef2088b42), I believe this mindset conflicts with how I spend most of my time at `$day_job`.

On the one hand, writing IaC is fun and I'm good at it! 🙂 On the other hand, I'm wondering how can I spend less time thinking about tooling or specific settings for my cloud resources and more time focusing on providing business value? 🤔

Then the thought occurred to me: **what if we didn't have to write IaC? Could we draw a diagram of our application and deploy it to the cloud instead?**

This is where I think tools such as AWS Application Composer and AWS Step Functions Workflow Studio are headed in the correct direction via their drag and drop visual interfaces.

![Danielle Tweet](./danielle-tweet.png)

## Demand More

Werner said in his keynote that "the most dangerous phrase in the English language is: 'we've always done it this way'." I think this applies to how we approach IaC with Serverless development.

![Grace Hopper Quote](./hopper-quote.jpg)

Anecdotally, I've noticed that experienced builders are mostly ignoring updates to tools like this because they already know how to write IaC and think they don't need a visual interface. I politely disagree.

To me, being able to more quickly collaborate, share, and deploy cloud resources is a huge win for us experienced engineers to further embrace the serverless mindset. We can then spend more time focusing on providing business value rather than trying to figure out how to write IaC for a specific cloud resource.

We are more than the tools we use. Embrace the serverless mindset and demand a brigher future. 😎
