---
layout: post
title: "Find the Index of the First Occurrence in a String"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---
Given two strings `needle` and `haystack`, return the index of the first 
occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.


### Example
Example 1:

- Input: `haystack` = "sadbutsad", `needle` = "sad"
- Output: 0
- Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

### Solution (Java)
For String problems, always think of ways to use higher-level functions such as comparing substrings instead of characters.
Let the length of `needle = n`. We can use slicing techniques, where we loop through each index in `haystack`, slice the next `n` characters and compare if it's equals to `needle`. This
runs in `O(n)` and is the most efficient way.

```java
class Solution {
    public int strStr(String haystack, String needle) {
        //return haystack.indexOf(needle); // cheating lol
        if(haystack.length() < needle.length())
            return -1;
        
        // note that substring() is inclusive, exclusive, i.e., [start,end)
        for(int i=0; i <= haystack.length() - needle.length(); i++){
            if(haystack.substring(i, i + needle.length()).equals(needle)){
                return i;
            }
        }
        return -1;
    }
}
```
