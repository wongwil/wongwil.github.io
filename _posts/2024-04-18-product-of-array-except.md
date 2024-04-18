---
layout: post
title: "Product of Array except itself without division"
author: William Wong
categories: leetcode
tags: [Medium]
published: true
---

Given an integer array `nums`, return an array answer such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and **without using the division operation**.

### Solution (Java)
As we cannot use division, the idea is to create a prefix and suffix array, such that ans[i] = pref [i] * suff[i].

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] prefix = new int[n];
        int[] suffix = new int[n];
        int[] answer = new int[n];
        // goal is ans[i] = pref[i] * suff[i]
        // edge values as 1 s.t. ans[i] = 1* suff[i], vice-verca

        prefix[0] = 1;
        suffix[n-1] = 1;
        for(int i=1; i<n; ++i){
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        for(int i=(n-2); i>=0; --i){
            suffix[i] = suffix[i+1] * nums[i+1];
        }

        for(int i=0; i<n; ++i){
            answer[i] = prefix[i] * suffix[i];
        }

        return answer;
    }
}
```

Further space O(1) optimization: Use only one answer array and an intermediate variable, which calculates
the suffix and prefix before-hand.

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] answer = new int[n];
        // goal is ans[i] = pref[i] * suff[i]
        // edge values as 1 s.t. ans[i] = 1* suff[i], vice-verca

        Arrays.fill(answer, 1);
        int current = 1;
        for(int i=0; i<n; ++i){
            answer[i] *= current;
            current *= nums[i]; // preparing for next iteration
        }
        
        current = 1;
        for(int i=(n-1); i>=0; --i){
            answer[i] *= current;
            current *= nums[i];
        }

        return answer;
    }
}
```
