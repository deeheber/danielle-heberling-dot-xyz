---
title: Computer Science for Everyone - Bubble Sort
date: "2020-04-10T22:12:03.284Z"
---

![Bubbles](./bubbles.jpg)
>Photo by Pieter on Unsplash

## Motivations
As an individual that is a professional software engineer and does not have a computer science degree, data structures and alogorithms used to be frightening words for me to hear. Oftentimes my inner voice translated those words into "here's some concepts that are often not used regularly, yet come up in software engineering interviews all the time. This gives us an excuse to not hire you solely based off of the fact that you do not have a computer science degree."

After being in the industry for a while, I've found my inner voice to be partially factual. The technical interviewing process is broken. As an individual who's had to interview others and had to write some coding challenges...I can totally understand why interviewers sometimes gravitate toward asking these types of questions beyond the aforementioned gatekeeping. It's nearly impossible to find a perfect set of coding questions to test one's knowledge...sometimes it's just easier to ask these types of questions to see how someone thinks through problems.

While I don't have a solution to how we can fix the broken coding interview process, I decided to focus on what I can control. I felt a sense of imposter syndrome, because I could not answer those types of questions in interviews...it was downright embarassing. Once an interviewer asked me to write a linked list and at the time I didn't even know what a linked list was. For those reasons, I decided to learn a bit about these concepts and hope to share over a series of posts what I've learned in hopes that it may help others.

## Let's get  onto the first topic
### Bubble Sort and how it  works
We have a list of items and want to put them in order. For example purposes and to keep things simple, let's just use a list of numbers.

`8, 6, 7, 5, 3, 0 ,9`

Here's the high level steps on how to sort this via the bubble sort method:
- Start going through the list
- Compare two items at a time
- If the two items are  out of order swap them
- Once going through the entire list, if we swapped items -->  repeat point #2 and #3
- End with a list in order once no items are swapped

With our example list we'll start by comparing the first two numbers
- `8` and `6` are out of order --> swap their order
- The list is now `6, 8, 7, 5, 3, 0, 9`
- Move to  the next two items and compare `8`  and `7`
- Out of  order so swap their place
- The list is now `6, 7, 8, 5, 3, 0, 9`
- Continue until you've gone through the entire list
- If  you swapped at least once, repeat the  steps through the entire list

## Code Snippet
Since a lot of computer science example material seems to be Java-centric, here's  what  a bubble sort looks like in JavaScript for a little change of scenery. Keep in mind there are other ways to write this.

```javascript
function bubbleSort (nums) {
  let wasSwapped = false;
  do {
    wasSwapped = false;
    for (let i = 0; i <= nums.length - 1; i++) {
      const firstNum = nums[i];
      const secondNum = nums[i + 1];

      if (secondNum < firstNum) {
        nums[i] = secondNum;
        nums[i + 1] = firstNum;
        wasSwapped = true;
      }
    }
  } while (wasSwapped);
  return nums;
}

// Test case
console.log(bubbleSort([8, 6, 7, 5, 3, 0, 9]));
```

## Time and Space Complexity
When talking about computer science-y things time and space complexity appears to be important, so I'd be remiss to not mention this.

In regards to "Big O" this has an average time complexity of On^2. Compared to other sorting methods it is  rarely the most efficient, since one needs to go through the entire list at least once (often multiple times) to get a sorted list. It is  not recommended to use in production, but since the though process generally aligns well with most people's natural thought process it is a good starter sorting algorithm used for teaching purposes.

It has a good space complexity of O(1) or "constant time".

## Go forth and sort the bubbles
I hope to be back with some similar posts explaining other computer science concepts in the future.
