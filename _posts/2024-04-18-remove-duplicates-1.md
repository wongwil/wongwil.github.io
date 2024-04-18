---
layout: post
title: "Remove Duplicates from Sorted Array 1"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:

Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. The remaining elements of `nums` are not important as well as the size of `nums`.
Return `k`.

### Example
- Input: `nums` = [0,0,1,1,1,2,2,3,3,4]
- Output: 5, `nums` = [0,1,2,3,4,_,_,_,_,_]
- Explanation: Your function should return `k` = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned `k` (hence they are underscores).

### Solution (C++)
The idea is to have two indeces. One index `a` which iterates through the whole list, "looking for the next unique element" and one in-place index `b`, which defines the last unique element.
As the list is sorted, we can check for the next unequal element than the element in index `b`.

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int b = 0; // inplace index, points to last unique element

        // a starts at 1, since the 0-th element is always unique
        for (int a = 1; a < nums.size(); a++){
            if(nums[b] != nums[a]){ // compare last unique to new
                nums[b+1] = nums[a]; // set new unique element 
                b++;
            }
        }

        // ! increment by 1, as this should be the number of unique elements
        return b+1; 
    }
};
```

or 

Simplified code, where we loop through each element, and only increment b, if we found a new unique element.
```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {

        int b=0;
        for (auto ele : nums){
            if (b == 0 || nums[b-1] != ele){
                nums[b] = ele;
                b++;
            }
        }
        
        return b;
    }
};
```
