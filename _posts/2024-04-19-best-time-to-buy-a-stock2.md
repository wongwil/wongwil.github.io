---
layout: post
title: "Best Time to Buy and Sell Stock 2"
author: William Wong
categories: leetcode
tags: [Medium]
published: true
---
You are given an integer array `prices` where `prices[i]` is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

### Example
- Input: prices = [7,1,5,3,6,4]
- Output: 7
- Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

### Solution (C++)
Similar to ["Best Time to Buy and Sell Stock 1"](https://wongwil.github.io/leetcode/2024/04/18/best-time-to-buy-and-sell-stocks.html), we consider two cases: When the next day's price is larger (1) and lower (2).
- (1) In case it's larger, we definitely have to sell! You might wonder, why is that the case? Couldn't there be a later better day, where the stock price is higher? That's true, but by the definition of the task, we can always buy and sell the stock at the same day for the same price. For the array: `[1 2 3 4]`, assuming we buy at day 0 (price=1), if we buy and sell the next day,
we have the intermediate profit of 1. Proceeding the same way until the end of array, we have a total profit of 3, the same as when "keeping" the stock and wait until the last day to sell.
By doing this, we always ensure having intermediate profits, and in case of `[1 2 1]`, waiting would actually result to no profit, so selling immediately after the stock price rises is better.
- (2) In case it's smaller, we update the `buy_price`. The reasoning is the same as previous task: For any future prices, a lower buy_price always results to a higher profit.

If you are more into math, one could imagine this approach as summing up the positive gradients from left to right.

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int max_profit = 0;
        int buy_price = prices[0];

        for(int i=1; i < prices.size(); i++){
            if(buy_price < prices[i]){
                // there is a higher price, we sell
                max_profit += prices[i] - buy_price;
                buy_price = prices[i];
            } else if (buy_price > prices[i]){
                // there is a cheaper buy price, no profit but better "potential" for profit
                buy_price = prices[i];
            }
        }

        return max_profit;
    }
};
```
