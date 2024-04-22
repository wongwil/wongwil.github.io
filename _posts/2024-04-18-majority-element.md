---
layout: post
title: "Majority Element"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---

## Majority Element
Given an array `nums` of size `n`, return the majority element.
The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

Could you solve the problem in linear time and in O(1) space?

### Example
- Input: nums = [3,2,3]
- Output: 3

### Solution (C++)
As the majority element `x` always has one item more than the half size of the array (or rounded up), one could imagine this by splitting the elements into 
their groups (maybe imagine some candies with different colors :sob:?).
Let's say for any candy that is `not x`, you take one candy of color `x` away, there will be AT LEAST one `x` left at the end.
Now, you can just assume any random color is the majority element. And if you keep taking them out, and the assumed majority element goes empty,
you know that this can't be it, as the true color, will always have one element left at the end. 
So for the solution, go through the array, increment majority element (if it's the same), decrement if it's different. Set new majority, if count is 0.

```c++
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int maj = -1;
        int ctr = 0;

        for(auto ele : nums){
            if (ctr == 0){
                maj = ele;
                ctr = 1;
            }else if (maj != ele){
                ctr--;
            }else if (maj == ele){
                ctr++;
            }
        }

        return maj;
    }
};
```
