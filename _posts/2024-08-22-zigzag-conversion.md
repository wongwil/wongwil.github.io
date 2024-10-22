---
layout: post
title: "Zigzag Conversion"
author: William Wong
categories: leetcode
tags: [Medium]
published: true
---
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

### Example
- Input: s = "PAYPALISHIRING", numRows = 4
- Output: "PINALSIGYAHRPI"
- Explanation:
```
P     I    N
A   L S  I G
Y A   H R
P     I
```
### Solution (Java)

Been a minute I posted here, sorry for that! :smiley: This is one typical problem that sounds more complicated than it is.
Don't try to find an algorithmic elegant solution, rather think of a good data structure to make it easier. And by good data structure,
I don't mean that there is one data structure that magically solves this. 

The trick is using for each row a list, then you use a variable which points to which list we are writing as we iterate through the string.
Obviously it should toggle the direction after it reaches the the end/beginning of the lists, similar like a metronome :alarm_clock: (there's no metronome emoji).
```java
class Solution {
    public String convert(String s, int numRows) {
        if(numRows == 1){
            return s;
        }
        
        String[] strings = new String[numRows];
        for(int i=0; i<numRows; i++){
            strings[i] = "";
        }

        boolean clockWise = true;
        int n = s.length();
        int id = 0;
        for(int i = 0; i < n; i++){
            char c = s.charAt(i);
            strings[id] += c;

            if(id == 0){
                clockWise = true;
            } else if(id == numRows - 1){
                clockWise = false;
            }

            if(clockWise){
                id++;
            }else{
                id--;
            }
        }

        StringBuilder sb = new StringBuilder("");
        for(int i=0; i<numRows; i++){
            sb.append(strings[i]);
        }

        return sb.toString();
    }
}
```
