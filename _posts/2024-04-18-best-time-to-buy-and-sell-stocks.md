---
layout: post
title: "Best Time to Buy and Sell Stock 1"
author: William Wong
categories: leetcode
tags: [Easy]
published: true
---
You are given an array `prices` where `prices[i]` is the price of a given stock on the i-th day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Example
- Input: prices = [7,1,5,3,6,4]
- Output: 5
- Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

### Solution (C++)
Clearly we go from left to right. The way to tackle this problem is to look at two cases: (1) If the next day has a larger price and (2) if the next day has a lower price. If price stays the same, trivial case, don't do anything at all.
- (1) easy case, we update our max_profit (if profit is larger than previous).
- (2) in case of a lower price, it's definitely better to "buy" this stock instead of the older one, as for ANY new price coming, it's always better to have a lower buy price for maximum profit.

That's it!

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int max_profit = 0;
        int min_buy = prices[0];
        int n=prices.size();
        for(int i=0; i<n; i++){
            if(prices[i] < min_buy){
                min_buy = prices[i];
            } else if(max_profit < (prices[i] - min_buy)){
                max_profit =  prices[i] - min_buy;
            }   
        }

        return max_profit;
    }
};
```
