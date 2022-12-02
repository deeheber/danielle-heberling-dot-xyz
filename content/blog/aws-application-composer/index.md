---
title: AWS Application Composer, the App Building Future we Need
date: '2022-12-04T10:12:03.284Z'
---

TODO: add hero image here

At re:Invent 2022, Werner Vogels announced the preview of <a href="https://aws.amazon.com/application-composer/" target="_blank" rel="noopener noreferrer">AWS Application Composer</a>.

## The Problem

One of the promises of using serverless is being able focus on your business logic and not your infrastructure. While I very much agree with this goal, in practice I don't think this has been fully achieved yet. <a href="https://www.lastweekinaws.com/blog/the-unfulfilled-promise-of-serverless/" target="_blank" rel="noopener noreferrer">Many in the community agree with me.</a>

Unless you're someone who has a background in sysops or cloud, it can be difficult to get started. Once you get started, it can be challenging to figure out how to move beyond the "hello world" tutorial and move fast with a team.

One best practice is to utilize infrastructure as code (IaC) to manage and provision cloud resources, because this allows you to have a written/deployable representation of your resources that can be shared in version control on a team. This is wonderful, but if you don't know anything about the resources you're deploying it can be challenging to have a baseline of where to start when writing the YAML for your Cloudformation/TF and/or code for CDK.

Not only is writing the IaC for individual resources challenging, so is figuring out how to stitch multiple resources together for a real world application. I'm thinking about things like IAM policies, triggers for resources such as Lambda, and being able to add environment variables to Lambda functions that reference other resources in your stack.

## The Solution (so far)

Since the beginning of my journey in learning serverless, there has always high demand for a visual way to drag/drop resources that generate deployable IaC. I've seen many individuals in the community and even some companies attempt this, but none have really stuck.

This problem space is what drew me to work as a software engineer at a small scrappy startup based out of Portland, OR called Stackery. I left the company shortly before the AWS acquisition; however, I still very much love my former teammates and believe strongly in their mission.

TODO: add meme image here

## Features I'd like to see post GA

I don't want to write another overview or "getting started" guide, because you can read the fantastic <a href="https://dev.to/aws-builders/overview-of-aws-application-composer-3j34" target="\_blank" rel="noopener noreferrer">other ones</a> that people in this community have written. I want to focus on what I'd like to see in the future.

Much like the aspiration of being able to focus on business logic and not infrastructure, I'd love to see a future where we don't have to write any IaC. This way, we can focus soley on what our architecture looks like rather than focusing on how things are configured. While we're far away from that goal, I think we're getting closer with AWS Application Composer.

One of the main criticisms of it have been that it outputs AWS SAM and not Terraform, CDK, or {insert preferred IaC tool here}. While those are very valid concerns/requests, I think the folks (many whom I respect and look up to) are missing the bigger picture.

Here's a small bulleted list of other things I'd like to see in the future:

- A way to use this outside of the AWS console since many companies restrict access to the console for security/regulatory reasons. Something like a VSCode extensions might help.
- VPC support - writing YAML for VPCs is not fun at all.
- AppSync resource - more companies are preferring GQL over REST
- Step function resource with integration into the SF visual tool that exists
- One step push deployment from the console and/or the AWS SDK. It's great as is with the AWS SAM CLI...but I'd love to see it be even easier.

If you have any suggestions, I highly recommend using the "submit feedback" link in the console with detail as to why you want x feature. The team really wants to hear your feedback and is actively using it to improve the product.

## Closing thoughts

While working at Stackery one of the challenges we faced was keeping up with newly announced features and integrating it into the product in a timely manner...especially for resources released without CloudFormation support. I think this acquisition makes a lot of sense to be directly embedded as a service within AWS.

This team deeply cares about developer experience and reducing the friction that exists with serverless. They are some of the most brilliant and humble folks I've ever had the pleasure of working with. I am glad to see more people who value lowering barriers and helping people do their best work over their own egos working at larger companies such as AWS.

I really hope that the dysfunction that sometimes exists with individual egos in larger corporations does not mess up the larger vision that started at Stackery. For now, I have faith that AWS can give them the tools and resources need to scale out this vision further and I very much look forward to what the future holds.

If you haven't yet, I encourage you to give it a try and provide feedback. It's still in preview and far from finished, but I think you'll be pleasantly surprised.
