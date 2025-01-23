# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Recurrence relation: T(n) = 3T(n/3) + 1 I got this recurrence relation because there are a total of 4 operations performed to partition the array and combine the results: 3 recursive operations and one operation to combine the results. To solve it, I used the substitution method. After the process, I determined that the general case is 3^i*T(n/3^i) + (3^(i+1)-1)/2, and that i = log3(n). After further simplification, I determined that the runtime of the algorithm is O(n).

I recieved help from Ali and ChatGPT. Ali told me that I needed to use substitution rather than the Master Theorem and that the slice operations are O(1), not O(n), and that they are not a part of the recurrence relation. ChatGPT helped me determine the general case since I was unable to notice that the pattern included a geometric series.

-----

I submitted this assignment last semester.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
