---
title: Tips for Getting Started in Cloud
date: '2024-04-12T09:12:03.284Z'
---

![Clouds Image](./clouds.jpg)

> Photo by <a href="https://unsplash.com/@billy_huy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Billy Huynh</a> on <a href="https://unsplash.com/photos/cloudy-sky-at-daytime-v9bnfMCyKbg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

## Who am I?

I graduated from a code school in 2016 in the United States and have been employed as a software engineer ever since. Because I like to give back to the communities that helped me get started, I've done paid contracts and volunteered in positions where I mentor folks who would like to take a similar path.

After years of sharing my knowledge in the wider AWS community, I was recognized as an AWS Serverless Hero in 2023.

## My goal in writing this

I often surround myself with people in the code school community who have expertise in "Full Stack JavaScript" (it's mostly Frontend focused from my observation). Because of this, I am often asked the questions like "how can I get started in Cloud" or "how can I learn AWS." It is my hope that this post can serve as a reference for folks who ask me those questions.

## My biases

We all have biases, myself included. I encourage you to do what you think is best for you. Do not take my advice as an absolute, "I must do everything on this list."

Cloud-wise I have mostly worked in AWS, so my opinions and advice will likely be AWS centric. It is my personal opinion that I wish that there was more Cloud competition (specifically one that offers the same uptime/choices of Serverless services AWS offers but with a better developer experience), but in my part of the world most of the jobs available are fully AWS or AWS heavy in terms of Cloud usage. This is why I've chosen to focus on this Cloud and not the others.

I also started my career as a "Full Stack JavaScript" developer and thus was originally very Frontend focused. At the time, I mostly cared about what the customers experience and the implementation details (while important) were less interesting to me. To that end, I was drawn to using managed services that AWS offers (sometimes called "Serverless") rather than rolling my own by using solutions such as Kubernetes or writing lots of Dockerfiles (sometimes referred to as "Cloud Native").

## Should I get cerfitications or do hands-on projects?

This is often the first question I am asked and many folks (some with monetary incentives) have shared their advice on the internet. Here is my biased opinion.

As a Frontend focused engineer, I had no idea what any of the AWS alphabet soup of managed services did or their names. I started my journey by obtaining the [AWS Certified Solutions Architect - Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/) certification.

I used my knowledge gained from studying for that exam as a jumping off point to start building my own projects. Lately, I've mostly been learning new things through hands on projects.

I view certifications as the "theory" and hands on as the "practice." Getting certifications without the hands on practice will not get you the job. From my experience most employers care more about what you have done and can do hands on inside of AWS.

For me a 30% focus on certifications (because my employer and various AWS community programs will pay for the exam) and 70% building side projects for fun is what has worked the best for my learning.

If I'm curious about an AWS service that I've never used, I will build a side project focused on it to learn. These side projects do not need to be public or used as a portfolio piece for job interviews. With these side projects, I like to take advantage of having a smaller codebase and a controlled environment (my own AWS account and not a production app for work) to experiment and learn.

## Infrastructure as code

Lots of certification prep material and getting started content will encourage you to click through the AWS console to create your Cloud resources. This is informally known as "click ops."

I would highly recommend you **don't do this** and learn to use an infrastructure as code (IaC) tool while building side projects for learning. This is much closer to how things will look once you have a job and are working on a team.

There's lots of arguments across the internet about which one is the best. Some folks weirdly get cult-ish about it. My opinion is to pick one and use it! The skills are transferrable across the different IaC tools from my experience.

Some commonly used ones with AWS are:

- [Terraform](https://www.terraform.io/)
- [AWS SAM](https://aws.amazon.com/serverless/sam/)
- [AWS CDK](https://aws.amazon.com/cdk/)

[AWS Application Composer](https://aws.amazon.com/application-composer/) might also be a good starting point because it is a drag and drop interface for your cloud resources, but you also have full access to the IaC that it generates.

Along the lines of IaC, you should also look into [CI/CD](https://martinfowler.com/articles/continuousIntegration.html). There are lots of tools to accomplish this, but one that I've been using lately on the job has been [GitHub Actions](https://github.com/features/actions). Again, I recommend you find one and use it. The principles and higher level ideas are transferrable across different CI/CD platforms.

## Recommended resources

Here's a list of resources that I recommend. As new material comes out, I will do my best to keep this updated. Disclaimer that these are all things that I've used or are created by folks whom I respect. No one paid, sponsored, or asked me to add their content to this list. Also note that some of these resources have [Discord](https://discord.com/) communities where you can interact with fellow learners and ask for help.

### Free resources

- [AWS Cloud Complete Bootcamp Course](https://www.youtube.com/watch?v=zA8guDqfv40)
- [Open up the Cloud](https://openupthecloud.com/start-here/)
- [Learn to Cloud](https://learntocloud.guide/)
- [Event Driven Architecture on AWS - Course for Beginners](https://www.youtube.com/watch?v=Zr6fnhvJKlw)

### Mix of free and paid resources

- [The Cloud Resume Challenge](https://cloudresumechallenge.dev/)
- [Tutorials Dojo](https://tutorialsdojo.com/)
- [Exam Pro](https://www.exampro.co/)

### Paid resources

- [Cloud Academy](https://cloudacademy.com/)
- [A Cloud Guru](https://www.pluralsight.com/cloud-guru)

## Closing

I hope you found my biased opinion on this topic helpful! Cloud and AWS are big things to learn, so be patient with yourself and join some communities where you can ask for help. I has taken me years to learn what I know and I still don't know everything.

Do you have any getting started in the Cloud resources you'd like to share? Please do!

Good luck out there. I can't wait to see what you build!
