---
layout: post
title: "Majority Element"
author: William Wong
categories: leetcode
tags: [LeetCode, Easy]
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
Go through array, increment majority element, decrement if it's different. Set new majority, if count is 0.

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
