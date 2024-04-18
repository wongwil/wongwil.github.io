---
layout: post
title: "Rotate Array [Medium]"
author: William Wong
categories: leetcode
tags: [LeetCode, Medium]
published: true
---
Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

Could you do it in-place with O(1) extra space?
### Example
- Input: `nums` = [1,2,3,4,5,6,7], `k` = 3
- Output: [5,6,7,1,2,3,4]

### Solution (C++)
The idea is two do the "reverse" approach: You reverse nums once. Then you reverse the subarrays in length `k` and `n-k` separately.
You can either use built-in reverse functions (for C++: reverse()) or code it your own. For practice, I coded my own reverse function.
To do that, do a swap function, where first element gets swapped with last, second with second last etc., so switch `i` with `n-i`.

Note that `k` can be larger than `n` in some test cases. You need to handle it by `k = k % n` since it's has cyclic equivalence.

```c++
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();

        k = k % n; // ensure k is within 0 to (n-1), as rotation of n same as k=0.
        // one could also use reverse(nums.begin(), nums.end());
        custom_reverse(nums, 0, nums.size()-1);
        custom_reverse(nums, 0, k-1);
        custom_reverse(nums, k, nums.size()-1);
    }
    
    void custom_reverse(vector<int>& nums, int a, int b){
        for(int i=0; i < (b+1-a) / 2; i++){
            int temp = nums[a+i];
            nums[a+i] = nums[b-i];
            nums[b-i] = temp;
        }
    }

};
```
