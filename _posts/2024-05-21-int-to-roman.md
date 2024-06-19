---
layout: post
title: "Integer to Roman"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---
Seven different symbols represent Roman numerals with the following values:
```
Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
```
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

- If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
- If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 
4 is 1 (`I`) less than 5 (`V`): `IV` and 9 is 1 (`I`) less than 10 (`X`): `IX`. Only the following subtractive forms are used: 4 (`IV`), 9 (`IX`), 40 (`XL`), 90 (`XC`), 400 (`CD`) and 900 (`CM`).
- Only powers of 10 (`I`, `X`, `C`, `M`) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (`V`), 50 (`L`), or 500 (`D`) multiple times.
If you need to append a symbol 4 times use the subtractive form. Given an integer, convert it to a Roman numeral.

### Example
- Input: num = 3749
- Output: "MMMDCCXLIX"
- Explanation: 
```
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
```

### Solution (Java)
In terms of the technical aspect, it's not a very interesting problem. I included this because I think it's still very likely that this problem occurs in interviews, since
the question is easy to understand and most people are familiar with the roman numerals.
The quickest and easiest solution would be to create a map containing all letter combinations which can be concatenated, including the subtractive form. I suggest writing all cases down like me from large to small:
M=1000, CM=900, D=500, CD=400, C=100, XC=90, L=50, XL=40, X=10, IX=9, V=5, IV=4, I=1.

If you have this map, you can just substract the number with the keys in the map as long as it's possible (and concatenate the string with
the corresponding value). If the remainder is smaller than the current key-value pair move to the next smaller one.
```java
class Solution {
    private HashMap<Integer, String> map = new HashMap<Integer, String>();
    public String intToRoman(int num) {
        // M=1000, CM=900, D=500, CD=400, C=100, XC=90, L=50, XL=40,
        // X=10, IX=9, V=5, IV=4, I=1.
        map.put(1000, "M");
        map.put(900, "CM");
        map.put(500, "D");
        map.put(400, "CD");
        map.put(100, "C");
        map.put(90, "XC");
        map.put(50, "L");
        map.put(40, "XL");
        map.put(10, "X");
        map.put(9, "IX");
        map.put(5, "V");
        map.put(4, "IV");
        map.put(1, "I");

        int[] arr = new int[]{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        int i=0;
        String result = "";
        while(num > 0){
            if(num >= arr[i]){
                num -= arr[i];
                result += map.get(arr[i]);
            }else{
                i += 1;
            }
        }
        
    return result;
    }
}
```

