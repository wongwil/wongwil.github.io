---
layout: post
title: "Remove Duplicates from Sorted Array 2"
author: William Wong
categories: leetcode
tags: [Medium]
published: true
---


Given an integer array `nums` sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at **most twice**. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

### Example
- Input: `nums` = [1,1,1,2,2,3]
- Output: 5, `nums` = [1,1,2,2,3,_]
- Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

### Solution (C++)
The idea is similar to [part 1](https://wongwil.github.io/leetcode/2024/04/18/remove-duplicates-1.html). 
We go through each element, and decide if we want to insert it. 
If we are having the the first two elements in the array, they can be inserted anyways (appear at most twice).
Then for other elements, we check if the second last unique element is not the same to ensure duplicates at most twice.

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int b = 0;

        for(auto ele : nums){
            if(b <= 1 || nums[b-2] != ele){
                nums[b] = ele;
                b++;
            }
        }

        return b;

    }
};
```
