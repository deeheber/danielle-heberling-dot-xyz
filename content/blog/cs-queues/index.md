---
title: Computer Science for Everyone - Queues
date: "2020-09-06T22:12:03.284Z"
---

![Bubbles](./queue.jpg)
>Photo by Halacious on Unsplash

## Motivations
TL;DR. I come from a non-traditional background and never knew basic computer science concepts before getting into the industry. As I interviewed for software engineering roles, I found this to be a blocker at some companies. So, I've decided to see what all the hype was about and do some self study to improve myself and want to share what I learned with the hopes that it may help others too.

This is part 2 of a ??? part series. If you're interested check out what we covered last time <a href="https://www.danielleheberling.xyz/blog/cs-bubble-sort/" target="_blank" rel="noopener noreferrer">here</a>.

## Let's get to the second topic - Queues
## What is a queue?
Queues are everywhere in our lives. In Noth America, we more commonly refer to them as "lines". You go to the coffee shop, a lot of time you wait in line. You go out to buy groceries, you wait in line to pay for your groceries. You're driving on the turnpike, you wait in line inside your car to pay the toll.

The idea of the line or queue also exists in the digital world. You click to print something on your computer, that print job enters a queue where it waits in line to be printed. The common theme on this type of data structure is the priority order in which jobs get handled. The first item to enter the queue is the first item to leave the queue. Much like in real life how we frown upon line jumpers that cut in line, queues also do not like this. In more official terms this is known as "FIFO" or "first in first out".

## Queue operations
- _Enqueue_ - Add an item to the end queue
- _Dequeue_ - Take the item at the front out of the queue
- _Peek_ - Take a look at the first element in the queue without removing it

## What does this look like in code?

There's many ways to go about simulating a queue. I'm going to use Javascript since tons of the CS resources I've found tend to lean on Java for code snippets.

```
// Create the queue
const queue = [];

// Add items to the queue (enqueue)
queue.push('a');
queue.push('b');
queue.push('c');

// Remove items from the queue (dequeue)
while (queue.length > 0) {
  const itemToProcess = queue.shift();

  ...process the item taken off of the queue here
}
```

## Going further
On the surface queues seem pretty simple especially if you're comfortable with arrays. Oftentimes queues are used as a building block for something larger and have the potential to get complicated pretty quickly, depending on what you're doing.

Queues are often used for breadth first (also known as level order) tree traversal. If you don't know what that means, that's ok. I'll most likely cover that in a later post.