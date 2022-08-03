---
title: Making the Switch - Software Development on Pop!_OS
date: '2022-08-05T10:12:03.284Z'
---

## My Background

Disclaimer: this post details my personal experiences using Pop!\_OS for software development. Depending on your needs and tool chains, it's possible your experience might differ. For this reason, here's the tools that I generally use for software development:

- Node/JavaScript/TypeScript
- AWS Serverless services
- AWS SAM
- AWS CDK

## Why Switch Away from MacOS

Apple does a wonderful job of controlling the entire ecosystem for its devices. This is can be good since things "just work". But, if you want to go beyond that and want more flexibility it might not be the best choice.

I was finding myself wanting to be able to upgrade my computer's RAM quite a few times. Many Apple devices solder it to the logic board. You then have the option of 1. Buying a new logic board (almost the cost of a new computer) or 2. Buying a new computer. I didn't like these choices and decided to check out alternatives.

I should also mention that I worked for Apple. I feel conflicted supporting a corporation that did not treat me well during my time as an employee. No judgements on those who do choose to use Apple products since everyone has their reasons.

## What is Pop!\_OS

The last time I used a Windows machine was Windows XP. A lot has changed since then, and I was hesitant to go back since I never enjoyed Windows anyway.

This is what gave me the idea to check out Linux. It's open source and there's many different distros one can choose. Plus, I was already familiar with the command line.

I settled on Pop!\_OS because:

- it's based on Ubuntu, a very common distro that has lots of documentation and an active community
- it had a very similar UI to MacOS - what I'm already familiar with
- I could use `apt-get` to install or I could use the Pop!\_Shop that comes with this distro (like the Mac App store)

## My Setup

Here's what I installed on my new Pop!\_OS machine for software development:

- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) - a tool to install and switch to different versions of node
- [Visual Studio Code](https://code.visualstudio.com/) - a code editor that I downloaded from the Pop shop
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-linux.html) - the docs suggest using Homebrew, but the idea of using Homebrew on a Linux machine feels wrong. I downloaded the file and ran the install that way. Eric Johnson, an AWS employee provided [this gist](https://gist.github.com/singledigit/5f00ef69393b3b6f5dbfcf6cfada345e) for install scripts on Linux as an option.
- [Docker](https://docs.docker.com/engine/install/ubuntu/) - I followed the instructions to install Docker Engine on Ubuntu; but, it looks like there's a Docker Desktop for Linux in GA now. 🎉 Also of note, `docker compose` performs way better on Linux machines (if you use that feature).

## Conclusion

If you use similar tools that I do, you'll notice that not much has changed to install things. You have to follow the Linux (sometimes Ubuntu) specific directions.

If you would also like to get out of Apple's "walled garden", I'd recommend trying Pop!\_OS. I've been using it as my daily driver now for about a year and have not had many issues. I'll admit, I was very hesitant since I was familiar with MacOS...but this has been a great upgrade in my life.

Perhaps next year will be the year of Linux on the desktop. 😝
