---
title: Dangers of Console-Driven Development
date: '2020-10-15T22:12:03.284Z'
canonical: 'https://www.stackery.io/blog/dangers-of-console-driven-development'
---

## What is Console Driven Development (CDD)?

AWS offers the ability to login to a web UI dashboard. In this dashboard, you can add, edit, and deploy various cloud resources. When I was first getting started with AWS, this is where I began for two reasons:

1. It seemed the easiest way to get started
2. Many tutorials out there included setting up cloud resources via the console

## Story Time - AKA Real Life CDD

My very first full-time job as a Software Engineer was on a small enough team that all of our infrastructure was setup using the AWS console in a single AWS account. When I arrived everything was already established for the most part, so I just needed to create an EC2 instance to use as my dev sandbox for my dev version of the application. Easy enough until it was not easy.

I quickly learned that parts of the application went beyond my dev sandbox and used various AWS services that I had never heard of before nor knew how to set up. When a customer wrote in with a question or problem, it was often in these parts of the application. Not only that, I was also unclear how to test these parts of the application unless it was directly in our production environment.

Since the team had a lot of siloed knowledge in this area and we wanted the ability for everyone to have visibility into this part of the application, we hired a Cloud Engineer who began the task of transforming all of our existing infrastructure into deployable AWS CloudFormation templates. Even though at the time I didn’t have full grasp on what the templates meant, I was able to take a look at them, compare them with the AWS documentation, and make a reasonable conclusion about what that part of the application was doing.

## Infrastructure-as-Code For Everyone

While getting started in AWS or any cloud provider, it can be easy to just jump straight to clicking through the console to create your resources. Short term that could work; however, as the application grows and/or you add new team members it can be difficult to remember exactly how you clicked through the console and configured resources. This is where the idea of infrastructure-as-code (IaC) comes into help.

IaC is helpful for many reasons, including but not limited to:

- _Have a written record of your infrastructure settings and how to connect things._ No need to recall how and where in the console you set something up. Bonus if you have this in git, since it makes it easier to rollback to previous versions should the unexpected happen.
- _Transportable infrastructure._ Having the IaC template allows us to take what we have in one cloud provider account and replicate it in another cloud provider account. Having separate dev, staging, prod etc. accounts helps reduce the risk of taking something down in prod when you just want to test a code change in a sandbox environment.
- _Onboarding new engineers is easier._ All they have to do to get their dev environment setup is to clone the repo and deploy it into their sandboxed cloud provider account.

## How Stackery is helpful...

- Auto generates the IaC template by dragging and dropping resources on our Design Canvas. If you do know CloudFormation or want to go further than our default values, you have direct access to edit the template
- Visualize your AWS stack via our visualization tool
- Deploys your code via the UI dashboard or our CLI
- Cloudlocal debugging of Lambda functions

Getting started in serverless and IaC can feel very daunting at first. It can be tempting to just click through the AWS console to create your cloud resources like many of the “getting started” tutorials recommend; however, I encourage you to sign up for a free trial of Stackery and give us a try. Your teammates, customers, and future self will be happy you made that choice.

> Note: This post was originally published on https://www.stackery.io/
