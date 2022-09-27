---
title: Better git workflows with graphite.dev
date: '2022-10-02T09:12:03.284Z'
---

## Current Landscape

[Git](https://git-scm.com/) is a tool that many tech people use and it is mostly great. Like many things, there are some pain points that could improve the overall experience. My issues revolve around when it comes to collaboration with others. Here's some examples.

As someone requesting a code review, so I can merge my changes:

- waiting for someone to review my code
- sometimes the code in the PR is needed for next steps

As someone doing code reviews for my teammates:

- with all of the notifications sometimes it can be unclear which PRs I need to review or re-review
- having to navigate very long PRs

## Solution

Upon joining my most recent company, my onboarding buddy told me about how they use [graphite](https://graphite.dev/).

Graphite utilizes something they call a "stack." What used to be one huge PR is now multiple branches that build off of eachother with each branch being its own PR.

TODO: insert image here

Sounds great as someone who has to review code, but as the code submitter I had some concerns about what happens when I merge a branch into another...would I get lots of merge conflicts? So far while using graphite, the answer has been mostly no for me. Graphite has a cli command that can be run to pull down changes from the upstream and it automatically rebases all affected branches.

```sh
gt repo sync --restack
```

Bonus that this command also prompts to ask if you want to delete local branches that have been merged into the `main` branch.

Another benefit is someone who needs to review code is that graphite has a very nice web based UI in which you can see which PRs need your input.

TODO: insert image here

## Summary

Despite all of the custom cli commands, graphite uses git under the hood. If you want to do something with vanilla git, graphite will pass that command through to git directly. One con to using graphit is that it just appears to work with Github (for now?).

There's many more cli commands and features that I did not cover. Much like git, people have their preferred workflows and there's many more commands/options than one would use in their daily workflow.

Disclaimer that I was not paid nor asked to write this post. When I joined a new company, coworkers were using this tool and found it helpful. Thought I'd share about how it's helped me in hopes that it might also help you.
