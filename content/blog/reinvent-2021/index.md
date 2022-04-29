---
title: My Top Three AWS re:Invent 2021 Announcements
date: '2021-12-09T22:12:03.284Z'
---

Disclaimer that this post contains my individual opinions and yours might differ. Let's get started!

## 1. [SQS Partial Batch Retries in Lambda](https://aws.amazon.com/about-aws/whats-new/2021/11/aws-lambda-partial-batch-response-sqs-event-source/)

![Cookies](./cookies.jpg)

> Photo by <a href="https://unsplash.com/@farber?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonathan Farber</a> on <a href="https://unsplash.com/s/photos/batch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

### What this means

This feature was announced during pre:Invent, but I think it still counts. Before, if SQS messages were sent as a batch into Lambda, you had the choice to return a response of a full failure or full success for the batch. Now we have an extra setting that allows queue retry behavior to be at the record level instead of the batch level. If one or more messages within that batch fail, you have the option to only send the failed messages back to the queue to attempt a retry.

### Why it's exciting

This allows me to delete some code that I wrote to ensure each message is idempotent and also allows me to reduce the number of API calls made to check if a message was processed before.

## 2. [AWS Cloud Development Kit (CDK) v2 is Generally Available](https://aws.amazon.com/about-aws/whats-new/2021/12/aws-cloud-development-kit-cdk-generally-available/)

![Tools](./tools.jpg)

> Photo by <a href="https://unsplash.com/@imattsmart?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">iMattSmart</a> on <a href="https://unsplash.com/s/photos/hammer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

### What this means

CDK v2 has been in developer preview for a while and it brings in some exciting features.

Notable changes include:

- One dependency library for all AWS services
- Stable APIs are enforced via [semver](https://semver.org/)
- Introduction of [`cdk watch`](https://aws.amazon.com/blogs/developer/increasing-development-speed-with-cdk-watch/) which auto-deploys code for you as you edit locally and save the changes. (Note that AWS does not recommend the use of this feature in production environments.)

### Why it's exciting

AWS took customer feedback and addressed some of the common painpoints with the original release of CDK. To me, these changes show maturity in the tool and increases my confidence in using it for production workloads.

## 3. [Sustainability Pillar for AWS Well-Architected Framework](https://aws.amazon.com/blogs/aws/sustainability-pillar-well-architected-framework/)

![Windmill](./windmill.jpg)

> Photo by <a href="https://unsplash.com/@karsten_wuerth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karsten Würth (➡️ @karsten.wuerth)</a> on <a href="https://unsplash.com/s/photos/environment?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

### What this means

AWS released a whitepaper that outlines best practices and recommendations around how to run workloads in the cloud with a focus on sustainability.

### Why it's exciting

Just because things are running in someone else's data center, doesn't mean that it isn't using up natural resources. With the recent unprecedented weather events, it's important to get started thinking about this now. The fact that AWS made this an official pillar shows that they also care about this.

## Closing

It was difficult to choose just three, because there were many great announcements during this conference. Overall, the announcements felt more incremental than innovative which I totally support. It's much better to improve on an existing service than to continually launch new services that aren't fully ready for production.

I encourage you to check out all of the announcements [here](https://aws.amazon.com/blogs/aws/top-announcements-of-aws-reinvent-2021/). What were some of your favorite announcements and why?

> "Now go build" - Werner Vogels
