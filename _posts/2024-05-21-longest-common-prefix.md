---
layout: post
title: "Longest Common Prefix"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---
Write a function to find the longest common prefix string amongst an array of strings.


If there is no common prefix, return an empty string "".

### Example
- Input: strs = ["flower","flow","flight"]
- Output: "fl"

### Constraints
 - `strs[i]` consists of only lowercase English letters.

### Solution (Java)
Although this is an easy problem, finding an optimal solution is not trivial. The straightforward solution which I did first was to take the first word as
comparison. Then, compare the characters from all other words at `i=0`, and make sure they all match the letter from the first word. If yes, we can move to the
next character (and add the character to the prefix), if not return the prefix so far.

```
class Solution {
    public String longestCommonPrefix(String[] strs) {
        String firstWord = strs[0];

        StringBuilder result = new StringBuilder();
        for(int i=0; i < firstWord.length(); i++){
            for(String s : strs){
                if(i >= s.length() || s.charAt(i) != firstWord.charAt(i)){
                    return result.toString();
                }
            }
            result.append(firstWord.charAt(i));
        }

        return result.toString();
    }
}
```
However, this runs in `O(nk)` where `k` is the length of the first word and `n` is the length of the array. If `k` is large (i.e. we have a long prefix), this is a problem.


A solution that does not depend on `k` is to sort the array first. Notice that we then only have to compare the first and last string, as their shortest common prefix
holds for all other strings as well. See this for an example:
```
aaa
aab
caa
```
This would run in `O(n log n + min(a,b))`, where `a,b` are the lengths of the first and last word respectively. It is a more robust solution, since
the runtime does not depend on `k` but mostly on `n`.

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);
        // aaa
        // aab
        // caa

        String first = strs[0];
        String last = strs[strs.length-1];
        int minLength = Math.min(first.length(), last.length());

        StringBuilder result = new StringBuilder();
        for(int i=0; i<minLength; i++){
            if(first.charAt(i) != last.charAt(i)){
                return result.toString();
            }else{
                // characters match and string haven't ended
                result.append(first.charAt(i));
            }

        }

        return result.toString();
    }
}
```

