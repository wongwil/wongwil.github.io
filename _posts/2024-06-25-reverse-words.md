---
layout: post
title: "Reverse Words in a String"
author: William Wong
categories: leetcode
tags: [Medium]
published: true
---
Given an input string `s`, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that `s` may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.

### Contraints
There is at least one word in `s`.

### Example
- Input: s = "a good   example"
- Output: "example good a"
- Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

### Solution (Java)

With built-in string functions, one can easily get a list of all words by splitting them with a given separator.
Using regex annotation, we use `\\s+` which means a minimum of one space is denoted as separator. And of course, trimming the leading spaces
is required before splitting them.
The rest of the implementation does not need further explaination. It runs in `O(n)` to split the words and stays in `O(n)` for reversing the list.

```java
class Solution {
    public String reverseWords(String s) {
        // split with regex \s+ any positive number of spaces
        String[] words = s.trim().split("");

        StringBuilder sb = new StringBuilder();

        for(int i=words.length-1; i>=0; i--){
            sb.append(words[i]);

            if(i > 0)
                sb.append(" ");
        }

        return sb.toString();
    }
}
```

**Follow-up question: Can you solve it in `O(1)` space?**
Use the knowledge gained from the problem [Rotate Array](https://wongwil.github.io/leetcode/2024/04/18/rotate-array.html)! This should ring some bells,
namely one should reverse the array in order to get the right "words" order, but since each word is also reversed, one should reverse each word separetely.
This can be done with two pointers, where the 
1) denotes the pointer where the first letter of the word should belong (ideally immediately after the first white-space)
2) denotes the pointer of the last letter of the word (ideally pointer 1 + amount of letters of the word)

Also note that in Java, strings are immutable, i.e. we cannot solve it in `O(1)` space. I have used C++ for that purpose!

### Solution (C++)
```c++
class Solution {
public:
    string reverseWords(string s) {
        int n = s.size();
        int left = 0; 
        int right = 0; 
        int i = 0; // iteration pointer

        reverse(s.begin(), s.end());
        while(i < n){
            while(i < n && s[i] == ' ') i++; // go to the first letter
            if(i == n) break; // went through each char, can stop

            while(i < n && s[i] != ' '){ // until the last letter
                s[right] = s[i]; // move chars in front
                right++;
                i++;
            }

            reverse(s.begin()+left, s.begin()+right);
            s[right] = ' '; // add space
            right++; // move to one right to start new word
            left = right; // both pointers start again 

            i++;
        }

        s.resize(right-1); 
        return s;
        

    }
};
```



