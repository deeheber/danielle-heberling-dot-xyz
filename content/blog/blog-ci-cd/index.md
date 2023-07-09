---
title: My Personal Blog Site's CI/CD
date: '2023-07-21T22:12:03.284Z'
---

![Tools](./tools.jpg)

> Photo by <a href="https://unsplash.com/@dancristianpaduret?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Cristian Pădureț</a> on <a href="https://unsplash.com/photos/XC7lc8biINg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Goals
In 2018, I set out to create this blog. Medium and other hosting providers existed; however, I wanted to have more control over ownership of my content. To me, it's fine to syndicate blog posts to other places for more reach, but I wanted my own space on the internet.

I also had the other following goals in mind:
1. Low maintence
2. Low cost (or free)
3. Use technology that I wanted to learn
4. Write blog posts in a transferrable format, such as markdown

## Tech Choices
In 2018, the hype of [JAMstack](https://jamstack.org/) and [Gatsby](https://www.gatsbyjs.com/) was in the air. Upon taking a closer look at Gatsby, I learned that it utilized GraphQL (tech I didn't know at the time and wanted to learn), React, and blog posts were written in markdown. After choosing Gatsby, I did some searching for the easiest way to deploy it and landed on [Netlify](https://www.netlify.com/).

To this day, my blog is still Gatsby hosted on Netlify and you [can view the code source on GitHub](https://github.com/deeheber/danielle-heberling-dot-xyz).

## Implementation
### CI/CD
When a new site is created on Netlify, you can [link it to a GitHub repository](https://docs.netlify.com/configure-builds/repo-permissions-linking/#link-a-git-repository). You then have the options to set up CI/CD to perform build, deploys, or previews whenever you push or merge to a specified branch.

For my site, I decided to keep it simple and stuck with the defaults. Whenever I put up a Pull Request against the `main` branch, Netlify runs a build and gives me a preview link to view the site with changes. Whenever I merge into the `main` branch, Netlify builds and deploys my site for me.

### Linking the deploy to updating my README
Later in my journey, I wanted to learn about GitHub actions and built an action that pulls the three most recent blog posts down from my blog's RSS feed (included with Gatsby) and writes them to the markdown file in my [profile README repo](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme). You can read about the process of creating it in [my past blog post](https://www.danielleheberling.xyz/blog/github-actions/).

A feature that I wanted was a connection between deploying my blog to prod and having the GitHub action scrape my RSS feed to update my README file. In the past, I had it running as a recurring CRON job, but I wanted something that would have a guarantee of the latest three blog posts being up to date. I had looked into using Netlify's [outgoing webhook feature](https://docs.netlify.com/site-deploys/notifications/#outgoing-webhooks), but found it to be challenging to customize the POST request to match what was needed to trigger a GitHub action.

I realized that I always wait for the Netlify deploy to prod to complete, manually check the site, and delete the branch...so I decided to utilize the branch deletion action to trigger my scrape of the RSS feed to update my README repo. I then discovered that the GitHub action [repository_dispatch](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#triggering-a-workflow-from-a-workflow) would be helpful in triggering the scrape of my RSS feed on branch delete.

I first created a token to save as a secret in my `danielle-heberling-dot-xyz` (blog) repository that gave it read/write permissions to my `deeheber` (README) repository. I then added a workflow to my `danielle-heberling-dot-xyz` repo to post an event to my `deeheber` repo via `repository_dispatch`. It looks like this:

```yaml
name: alert README repo of changes on main

on:
  workflow_dispatch:
  # Runs on git reference deletion (branch or tag)
  delete:

jobs:
  dispatch:
    runs-on: ubuntu-latest
    steps:
      - name: Update README in deeheber/deeheber repo
        run: |
          curl -H "Accept: application/vnd.github.everest-preview+json" \
          -H "Authorization: token ${{ secrets.DISPATCH_TOKEN }}" \
          --request POST \
          --data '{"event_type": "scrape", "client_payload": {"ref": "${{ github.ref }}"}' https://api.github.com/repos/deeheber/deeheber/dispatches
```
I noticed there were some pre-made actions that can do this for me, but I decided that since this is a simple `POST` request that I can do this via `curl` without the extra dependency of a 3rd party maintained GitHub action.

Then on the receiving repo (`deeheber`), I added an action to listen for that `scrape` `event_type` to trigger scraping my RSS feed and writing the three most recent blog posts/links to the `README` file. The `on` section is the only part that I had to change for this to work:

```yaml
name: Build README

on:
  workflow_dispatch:
  repository_dispatch:
    types: [scrape]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repo
        uses: actions/checkout@v3
      - name: Use Node
        uses: actions/setup-node@v3
        with:
          node-version: "18.x"
      - name: Install node dependencies
        run: npm install
      - name: Check for RSS feed updates
        run: npm run scrape
      - name: Commit and push
        run: |-
          git diff
          git config --global user.email "actions@users.noreply.github.com"
          git config --global user.name "README-bot"
          git add -A
          git commit -m "Update content" || git commit --allow-empty -m "Empty commit"
          git push
```

On both actions, I decided to keep the [workflow_dispatch](https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow) event in place, so I could manually run these workflows.

## Closing
There are many different ways that I could've accomplished this, but this is what I ended up implementing. It is not perfect, but more than good enough for a personal blog site in my opinion.

Since I'm already using Netlify for hosting, I figured it was easiest to utilize their built in CI/CD services. I could've spent time rolling this myself using various AWS services or other things, but I wanted something that I didn't need to spend that much time on with the initial setup and/or maintence.

Thank you to Netlify, Gatsby, and GitHub for having a very permissive free tier that enables me to keep my blog up and running. I only need to pay for my custom domain name (danielleheberling.xyz) in order to keep things running.
