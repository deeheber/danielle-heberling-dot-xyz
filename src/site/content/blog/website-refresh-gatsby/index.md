---
title: Website Refresh With Gatsby
date: "2019-03-13T22:12:03.284Z"
---

![Computer](./computer.jpg)

Sometimes you just want a change. In this post, I am going to write about my experience rebuilding my website using Gatsby. All of the things that I say in this are from my own experience and it might not match yours. It is my hope that this might help you decide if Gatsby is the right choice for you or if you're already using Gatsby maybe get some ideas for your site.

## Background
As a former employee of Squarespace, I get two free comped sites for life which is pretty awesome, considering that those hosting fees do add up quickly. With that said, my old website on Squarespace was great for what it was...but as I learned how to code, I wanted to customize it more and more beyond what any template offered.

As someone who used to support the Squarespace developer platform, I'm very aware that I could build my own template...but that has its own black holes. A lot of times the core platform CMS would update and things within custom templates built on the Squarespace developer platform would randomly break...I did not want to deal with this.

## Requirements
I wanted something that was minimalist, accessible, looks great on various screen sizes, customizable, and easy to add more posts. I also wanted full access and ownership of all of the code. This way, I could have the freedom to easily move my entire site elsewhere if I so chose to.

## Enter Gatsby
There is a lot of hype around <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> in the JavaScript community particularly, folks who use React. I didn't want to immediately jump on the bandwagon until it was a bit more mature. The more and more positive things that I saw being said about Gatsby on Twitter and viewing awesome Gatsby sites, I knew I had to at least give it a try...I'm very glad I did.

## Gatsby Features I Think Are Cool
If you're new to React and/or just don't want to build everything completely from scratch there are many <a href="https://www.gatsbyjs.org/starters/?v=2" target="_blank" rel="noopeener noreferrer">starter templates</a> to choose from. These are created by Gatsby employees and members of the community. I think you can also start from scratch though if you want, but am not overly sure.

Gatsby also has great <a href="https://www.gatsbyjs.org/docs/" target="_blank" rel="noopeener noreferrer">documentation </a> and an active <a href="https://github.com/gatsbyjs/gatsby/issues" target="_blank" rel="noopeener noreferrer">GitHub repository</a> where you can file an issue to ask for help on something or file a bug.

I am personally not a huge fan of React router, so I was delighted when I learned that <a href="https://reach.tech/router" target="_blank" rel="noopeener noreferrer">Reach Router</a> comes with Gatsby. Major bonus is that it is highly accessible, since Reach Router was created with accessible navigation at its core.

Gatsby has a great plugin eecosystem. Some of these plugins are maintained by Gatsby while others are maintained by various open source developers. Here are a few that I like...though there are many more to explore:

- <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/" target="_blank" rel="noopener noreferrer">React Helmet </a>makes it a breeze to enhance the SEO of your website.
- <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-typography/" target="_blank" rel="noopener noreferrer">Typography </a>allows easy use of adding a prebuilt typography theme.
- <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-offline/" target="_blank" rel="noopener noreferrer">Offline </a>adds a service worker to your site to allow it work offline and when there are bad network connections.
- <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-feed/" target="_blank" rel="noopener noreferrer">Feed </a>creats an RSS feed or feeds for your site.

You can deploy a Gatsby site nearly anywhere you want. There are plugins to make deploying to an S3 bucket or on Netflify super easy. <a href="https://www.gatsbyjs.org/docs/deploying-and-hosting/" target="_blank" rel="noopeener noreferrer">The docs</a> have a list of ideas for hosting if you aren't sure with instructions on how to deploy to those different platforms.

## Challenges I ran into
This one is mostly a first world problem, but the starter template that I decided to go with used some coding conventions that don't match my style, so I ended up spending some time doing things like getting rid of dangling commas, adding semicolons etc.

I think this may possibly have been due to the service worker, but I found that my site was very aggressibely cached. Lots of times when I made a change, it would not show on localhost until I did a hard refresh.

Not directly Gatsby related, but I attempted to use <a href="https://www.netlify.com/docs/form-handling/" target="_blank" rel="noopeener noreferrer">Netlify forms</a>, followed the docs, and still could not get the form the reliably submit. I filed an issue with Gatsby. They were amazing and replied super fast. We eventually decided the issue most likely was something on Netfliy's side. After more troubleshooting and talking with Netlify's support, I decided to give up on that since I wanted to ensure my form would reliably submit as I did not want to miss any messages and there are many other options out there to create a form.

## The Future
I view pretty much every project of mine as a living, breathing entity that is never complete. I'm keeping track of ideas of things I'd like to implement in the future on <a href="https://github.com/deeheber/danielle-heberling-dot-xyz/issues" target="_blank" rel="noopeener noreferrer">GitHub</a>. Feel free to contribute if you'd like.

In addition to my issues listed on GitHub, I also think I'd like to deploy the site to an S3 bucket (it is currently hosted on Netlify) to make integration with other AWS services easier. For now, I think thinking I'd like to put that bucket behind a CloudFront distribution that can talk to a Lambda which processes the form and then sends me a customized email with the form submission info via SES and utilizes Cloud Monkey. Ok now I'm just making up fictional AWS services, I'll stop.

## Final Thoughts
Working with Gatsby has been a joy. The community is so kind and helpful, and the docs are very detailed/searchable. Anytime I had a question 99% of the time, I could find it through a quick search since someone else had already asked the same question I was.

Gatsby is a great tool that can be used for various things such as a personal blog or a documentation site. In my opinion, it really shines with the various CMS options that you can connect to a Gatsby frontend. This is very helpful if you have people who don't know how to code or don't want to code updating or adding new blog posts or other content. They can add their content while the developer can work on customizing how the website or web app looks. I give Gatsby a 10/10...would use again.
