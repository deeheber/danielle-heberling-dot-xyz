---
title: Event Driven Background Processes
date: "2021-09-13T22:12:03.284Z"
---

Two themes in serverless computing that frequently come up are 1) "you don't have to focus on managing services and can just focus on writing your business logic" and 2) "serverless is event driven". Personally I've found both of these to be true and am going to share one of my favorite event driven architectures built with AWS in this post.

## Business Scenario
Whenever a user signs up for our application, we want to perform the following three actions:
1. count the event in our [3rd party analytics service](https://heap.io/)
2. put them on an email mailing list in our [Mailchimp account](https://mailchimp.com/)
3. send a notification to a [slack](https://slack.com/) channel in our corporate slack

## Method
There's many ways someone could approach this issue, but my favorite way is to use a "fan out" or "event driven fork" approach. Here's how it works.

In our example use case, the person signing up to use the application, we send a message to [SNS](https://aws.amazon.com/sns/). That SNS topic then sends that message to three queues with a function on the other side of each queue to do the heavy lifting for us. Each queue-function combo correlates to a business function we want to perform. In this example case it's the three actions listed above (send to analytics, sign up for mailing list, and send notification to slack).

![Infra Diagram](./event-driven.png)

## Message Filtering
In a real life application, you'll most likely have many many events that you want to track and perform actions as a result. Let's go back to our example and add a new event we want to track - login. For login, we only want to count the event in our 3rd party analytics service and ignore adding them to a mailing list (they're already signed up) and ignore receiving a slack notification (that would be a lot of noise in slack).

We can accomplish this by utilizing [SNS message filtering](https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html).

## Benefits to this Approach
Like any architecture decision, there are always pros and cons. The important thing is to weight the two together and use what works for you and your team. Here's some benefits I've noticed and why I enjoy using this approach:

1. The events are decoupled from the initial action. For example, we wouldn't want someone to not be able to sign up just because there was an error counting the signup in our analytics.
2. These background reactions to events don't need to be instant since we don't need to provide the user feedback...it's just for our backend office uses, so you might as well process these events seperate from the general application flow.
3. Let's say you have a CLI tool and a web application...both of those can send messages to this SNS topic.
4. If you decide you no longer want to use Mailchimp, you can just delete the queue/function infrastructure and add a new queue/function combo to process your replacement mailing list service.

## Additional things to Keep in Mind
I didn't discuss this in detail here, but it's a good practice to have a "dead letter queue" or DLQ setup, so you can retry failed events. You can read more about there [here](https://www.danielleheberling.xyz/blog/dlq-messages/).

In our example architecture, we mainly focuses on SNS -> SQS; however, there are many other ways that you can achieve a "fan out" architecture. For example: [AWS EventBridge](https://aws.amazon.com/eventbridge/).

So this post was a lot of talk, but how can you actually implement this? Check out this [GitHub repo](https://github.com/deeheber/event-fork) for an example template using [AWS SAM](https://aws.amazon.com/serverless/sam/).
