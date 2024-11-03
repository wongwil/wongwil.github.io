---
layout: post
title: "Valid Palindrome"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---
A phrase is a palindrome if, after converting all uppercase 
letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


### Example
- Input: `s = "A man, a plan, a canal: Panama"`
- Output: `true`
- Explanation: "amanaplanacanalpanama" is a palindrome.

### Solution (Java)
If you paid attention to data structure class, this sounds like a typical stack problem. From left to right, until the `n/2`
put the characters onto the stack, after that, take the first element from the stack and compare it to the rest of the string.
Surely this works, but takes up `O(n)` memory.

A more elegant solution is using to pointers one at `i=0`, other one at `j=n-1`, and compare them until we reach the middle. Runs in
`O(n)` and takes no memory!

Also use Regex `[^a-z]` etc, to remove non alpha numeric characters!

```java
class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]", "");
        s = s.toLowerCase();
        for(int i=0; i < (int)(s.length() / 2)  ; i++){
            if(s.charAt(i) != (s.charAt(s.length() - 1 - i))){
                return false;
            }
        }

        return true;
    }
}
```
