---
layout: post
title: "Insert Delete Random in O(1)"
author: William Wong
categories: leetcode
tags: [Medium]
published: true
---

Implement the RandomizedSet class:
- `RandomizedSet()`: Initializes the RandomizedSet object.
- `bool insert(int val)`: Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
- `bool remove(int val)`: Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
- `int getRandom()`: Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). 
Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average `O(1)` time complexity.

No examples, as task description is pretty self-explanatory.

### Solution (Java)
Clearly, to achieve O(1) for insert and remove, it requires you to use a Hash-like datastructure. However, unlike arrays, they are indexed by their own key (and not like in arrays where `i` in required to be in `0-n`). 
This means, using a random generator, you cannot get items in `O(1)`. The trick is to use **both** datastructures: 
1. ArrayList which contains all items unordered
2. HashMap, which contains the to be inserted `x` as the key, and the index in the arraylist (1) as the value.

- (1) can easily be used to get random items in O(1)
- (2) can be used to verify if it exists in O(1), also to add and remove items.

When adding items, the new entry in the hashmap is just `(val, arr.size())`
When removing items, you get the index from the hashmap. Then we just remove it 
from the array, also we replace the index of the last element to the one that was deleted, 
so we don't need to update all values in the hashmap (assuming there are enough items).

```java
class RandomizedSet {

    private Random random;
    private ArrayList<Integer> array;
    private HashMap<Integer, Integer> map;
    public RandomizedSet() {
        random = new Random();
        array = new ArrayList<Integer>();
        map = new HashMap<Integer, Integer>();
    }
    
    public boolean insert(int val) {
        if(map.containsKey(val)){
            return false;
        } else{
            // insert
            array.add(val); // add at the end
            map.put(val, array.size()-1); // points to the end
            return true;
        }
    }
    
    public boolean remove(int val) {
        if(map.containsKey(val)){
            int index = map.get(val);
            array.set(index, array.get(array.size() - 1)); // set last element to that position
            map.put(array.get(index), index); // update index for that element

            map.remove(val);
            array.remove(array.size() - 1);
            return true;
        }else{
            return false;
        }
    }
    
    public int getRandom() {
        // nextInt(n) is exclusive n. So [0,n)
        return array.get(random.nextInt(array.size()));
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
```
