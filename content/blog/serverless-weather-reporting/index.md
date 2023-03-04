---
title: Serverless Weather Reporting with AWS Step Functions and CDK
date: '2023-03-06T22:12:03.284Z'
---

![Snow on evergreen trees](./snow-trees.jpg)

> Photo by <a href="https://unsplash.com/@devjustesen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Devin Justesen</a> on <a href="https://unsplash.com/photos/QrL-aRyuf_8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Background

I live in the [Pacific Nowrthwest](https://en.wikipedia.org/wiki/Pacific_Northwest), more specifically in a suburb of Portland Oregon. Approximately 1-2 times per year, it snows. When this happens the entire region acts shocked because it "never happens here."\* Our local governments do not have many snow plows nor do they salt the roads much. This means that when it snows, the roads are highly dangerous. The city of Portland often shuts down for multiple days.

Some former residents of Portland created a website, [isitsnowinginpdx.com](http://isitsnowinginpdx.com/). I do not know them, so I cannot speak for their motivations;however, as a consumer of the site it's both entertaining and informative.

One problem that I ran into was after moving out of Portland proper into the suburbs. This site was less accurate. For this reason, I decided to build [my own site](http://www.isitsnowinginhillsboro.com/).

## Architecture Walkthrough

Behind the scenes this website is automated using AWS Serverless technologies. The site is hosted on an [S3 Bucket](https://aws.amazon.com/s3/) and the weather is updated every 10 minutes using a [Step Function](https://aws.amazon.com/step-functions/). The Step Function is triggered by [EventBridge Scheduler](https://aws.amazon.com/eventbridge/scheduler/).

I made the decision to not put a [CloudFront](https://aws.amazon.com/cloudfront/) distribution in front of this S3 Bucket, because this is a region specific website. Most people viewing this site live in the area and adding a CDN feels like unecessary complexity given the use case. As a result, the site renders of `HTTP` rather than `HTTPS`.

Here's a breakdown of what the Step Function workflow does:

1. Get the current site status (snowing or not) from a DynamoDB table
2. Check the current weather using the [OpenWeatherMap API](https://openweathermap.org/api) via a Lambda function
3. Then there is a choice state that compares the two values
4. If the two values do not match, it updates the site to show the current weather obtained from the API
   - A Lambda function generates the HTML and places that HTML file into an S3 bucket (more on this later)
   - DynamoDB putItem to update the site status
5. If the two values match, it does nothing and goes to the end of the workflow

Here's a visual representation of the workflow:
![Weather site workflow](./weather-workflow.png)

## Challenges

Overall things went smoothly. I did run into a few tiny issues.

### Issue 1: EventBridge Scheduler and CDK

[EventBridge scheduler](https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/) is a new-ish feature, but does not have an L2 construct. I was able to get this working using an L1 construct; however, with an L1 construct you're just writing Cloudformation in the programming language of choice without the extra benefits that come along with an L2 construct. In this case, I also had to define an [IAM Role to allow the scheduler to invoke the Step Function along with an inline policy](https://github.com/deeheber/weather-site/blob/blog-post/lib/weather-site-stack.ts#L219-L237). This is probably a feature that would've been included in an L2 construct. More info on L1 vs L2 constructs [here](https://docs.aws.amazon.com/cdk/v2/guide/constructs.html#constructs_l1_using). I plan to keep an eye on this open [RFC](https://github.com/aws/aws-cdk-rfcs/issues/474).

### Issue 2: HTML Generation

Step Functions have [direct integrations](https://www.infoq.com/news/2021/11/step-functions-sdk-integration/) via the AWS SDK with many services. The advantage of this is you do not have write Lambda function to make those calls and can save some $$$ as well as enjoy the built in error/retry logic that comes with the Step Funciton service. I've used the direct integration for my two calls for DynamoDB and it worked quite well.

When it came to generating HTML and using the S3 PutObject direct integration, it kept adding quotes around the HTML content before putting it in the bucket. This would result in a body that looked something like `"<h1>My site<h1>"`. This caused the page to not render properly in the browser. I ended up getting this working by using a Lambda function and [sending the Body as a Buffer](https://github.com/deeheber/weather-site/blob/blog-post/src/functions/update-site.ts#L68), but I would've much preferred the direct integration.

## Closing

The code is open source and can be viewed [here](https://github.com/deeheber/weather-site/tree/main).

You can clone the repo following the instructions in the `README.md` file to create your own weather site. Plug in the lattitude and longitude of your city. Also, it's not limited to just snow! You can change the weather type to rain, thunderstorms, etc. Check out the `Main` weather types [here](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2) for all available options.

Open source contributions are welcome. Currently, [I'm seeking someone who knows how to write CSS better than me](https://github.com/deeheber/weather-site/issues/1), but if you see anything else that could be improved feel free to [contribute](https://github.com/deeheber/weather-site/blob/main/CONTRIBUTING.md).

Thanks to the original creators of [isitsnowinginpdx.com](http://isitsnowinginpdx.com/) for the inspiration. This was a fun project for me to revisit Step Functions and learn more about EventBridge Scheduler.

\* To be fair the last instance of snow in the area was [more than usual](https://www.oregonlive.com/weather/2023/02/portland-records-snowiest-day-since-1943-landing-at-no-2-on-all-time-list.html).
