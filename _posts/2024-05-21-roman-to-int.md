---
layout: post
title: "Roman to Integer"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

### Example
- Input: s = "MCMXCIV"
- Output: 1994
- Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

### Solution (Java)
This is pretty straight forward. Note that the "special" cases appear iff the left letter is smaller than the right one. In other cases, we just easily sum up. Note that you should use a map or switch case, to identify which letter belongs to which value.
As such we go from the string backwards, save the previous value (right one) and check if the current one is smaller than the previous value (in that case, it's substraction).

```java
class Solution {
    private HashMap<Character, Integer> map = new HashMap<Character, Integer>();
    public int romanToInt(String s) {
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int ans = 0;
        int rightVal = 0; // we loop backwards, and save the previous val
        for(int i=s.length()-1; i>=0; --i){
            int currentVal = map.get(s.charAt(i));
            if(currentVal >= rightVal){
                ans += currentVal;
            }else{
                // the case of IV
                ans -= currentVal;
            }
            rightVal = currentVal;
        }

        return ans;
    }
}
```

