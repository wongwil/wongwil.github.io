---
layout: post
title: "Gas Station 1"
author: William Wong
categories: leetcode
tags: [Medium]
published: true
---
There are `n` gas stations along a circular route, where the amount of gas at the ith station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `i-th` station to its next `(i + 1)-th` station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`. If there exists a solution, it is guaranteed to be unique.

### Example
- Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
- Output: 3
- Explanation:
```
Start at station 3 (index 3) and fill up with 4 unit of gas. 
Your tank = 0 + 4 = 4  
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
```
Is it possible to do it in O(n)?

### Solution (Java)
I really recommend drawing the example on paper. There are two important points to note before attempting this problem:
1. How can we verify that a solution exists? Think of a condition that must hold for the car to be able to travel the whole route.
2. Assuming we have started at some point, but at another point, the tank is not enough. Can we derive a further conclusion?

To the first question: Let `reserve[i] = gas[i]-cost[i]` be the reserve we have travelling to point `i+1` after filling up the tank by `+gas[i]`. More simply, it's the amount of fuel we have at point `i+1`. Note that if we sum up each reserve, the sum has to be positive! This is because the tank size is unlimited and we always fill up the maximum amount we can. If the sum would be negative, wherever we start, we would end up negative at the end of the loop (since the available resources are negative). Therefore, we can use this condition `sum(reserve) >= 0` to check, if there exists a solution.

To the second question: Note that if we start at some point `a`, and end up at a point `b` where the tank will be negative, then similar to the jump game problem, starting to any points in between will result to a negative tank at point `b` => none of these points can be used as starting point.

Combining these two points will easily lead to the following solution.

```java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;

        int tank = 0; 
        int total_reserves = 0;
        int start = 0;
        for(int i=0; i<n; ++i){
            int reserve = gas[i] - cost[i]; // reserve we will have in next station
            total_reserves += reserve; // verify if solution exists

            tank += reserve;
            if(tank < 0){ // tank is negative, we have to restart at next node
                start = i + 1;
                tank = 0;
            }
        }

        // solution exists iff sum of all reserves is positive or 0
        return (total_reserves >= 0) ? start : -1;
    }
}
```
