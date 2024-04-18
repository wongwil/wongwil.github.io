---
layout: post
title: "Remove Element"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in nums in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in nums which are not equal to `val` be `k`, to get accepted, you need to do the following things:
- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of nums are not important as well as the size of nums.
- Return k (❗ EDIT: the exercise had a mistake on leetcode. It is supposed to return the pointer of the last element, so it should be `k-1`)

### Example
- Input: `nums` = [3,2,2,3], `val` = 3
- Output: 2, `nums` = [2,2,_,_] (❗ EDIT: should return 1)
- Explanation: Your function should return `k` = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned `k` (hence they are underscores).

### Solution (C++)
The idea is to go through `nums` from left to right. We skip values that are equals val but with a pointer, we keep track of the last element which was `val` to insert the next element which is not `val`.
When we insert a valid element, we increment our pointer.

```c++
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int ptr = 0;
        for (int i = 0; i < nums.size(); i++){
            if (nums[i] == val){
                // skip and do nothing, we increment i in the next iteration
            } else{
                nums[ptr] = nums[i];
                ptr++;
            }
        }
        return ptr; // required to return pointer of last element
    }
};
```
