---
title: Chaos Engineering Ideas For Serverless
date: '2019-01-24T22:12:03.284Z'
canonical: 'https://www.stackery.io/blog/chaos-engineering-serverless'
---

![Chaos](./chaos.jpg)

The <a href="http://principlesofchaos.org/" target="_blank" rel="noopener noreferrer">Principles</a> define chaos engineering as:

> The discipline of experimenting on a distributed system in order to build confidence in the system’s capability to withstand turbulent conditions in production.

The high-level steps for implementing chaos experiments involve: defining your application’s steady state, hypothesizing the steady state in both the control and experimental groups, injecting realistic failures, observing the results, and making changes to your code base/infrastructure as necessary based off of the results.

Chaos experiments are not meant to replace unit and integration tests. They’re intended to work with those existing tests in order to assure the system is reliable. A great real-world analogy is that chaos experiments are like vaccines: A vaccine contains a small amount of the live virus that gets injected into the body in order to prompt the body to build up immunity to prevent illness. With chaos experiments, we’re injecting things like latency and errors into our application to see if the application handles them gracefully. If it does not, then we can adjust accordingly in order to prevent incidents from happening.

Sometimes chaos engineering gets a bad reputation as “breaking things for fun.” I believe the problem is that there’s too much emphasis on breaking things while the focus should be on why the experiments are being run. In order to minimize your blast radius, it’s recommended to begin with some experiments in non-production environments during the workday while everyone is around to monitor the system. On the people side of things, make sure you communicate with your entire team what you’re doing, so they aren’t caught by surprise. Once you have experience and confidence running experiments, you can then move onto <a href="https://www.stackery.io/product/deploy/" target="_blank" rel="noopener noreferrer">running them in production</a>. The end goal is to run experiments in production since it is difficult to have an environment that matches production exactly.

Traditionally chaos engineering at a high level is running experiments that often involve shutting off servers, but if you are in a serverless environment with managed servers this can pose a new challenge. Serverless environments typically have smaller units of deployment, but more of them. This means for someone who wants to run chaos experiments, there are more boundaries to harden around in your applications.

If you’re thinking about running some chaos experiments of your own in a serverless environment, some ideas of things to look out for are:

- Performance/latency (most common)
- Improperly tuned timeouts
- Missing error handling
- Missing fallbacks
- Missing regional failover (if using multiple regions)

For serverless, the most common experiments involve latency injection or error injection into functions.

Some examples of errors you could inject are:

- Errors common in your application
- HTTP 5xx
- Amazon DynamoDB throughput exceeded
- Throttled AWS lambda invocations

A pretty neat trend I’ve seen is folks writing their own libraries to inject latency and/or errors into a Lambda function using the new Lambda layers feature. <a href="https://docs.stackery.io/docs/api/nodes/Function/#layers" target="_blank" rel="noopener noreferrer">Stackery makes it easy</a> to add layers to your function. Another idea is to implement chaos experiments as part of your CI/CD pipeline. If you don’t want to write your own library there are a lot of open source projects and also some companies that offer “chaos-as-a-service.”

If you’d like to go into more detail on implementation, I’d suggest checking out <a href="https://medium.com/@adhorn/injecting-chaos-to-aws-lambda-functions-using-lambda-layers-2963f996e0ba" target="_blank" rel="noopener noreferrer">this article</a> to see some code. This <a href="https://github.com/dastergon/awesome-chaos-engineering" target="_blank" rel="noopener noreferrer">GitHub repo</a> also has some great resources on the overall topic of Chaos Engineering. I hope this post gave you some ideas and inspiration on different ways you can test your serverless environment to ensure system reliability for your customers!

> Note: This post was originally published on https://www.stackery.io/
