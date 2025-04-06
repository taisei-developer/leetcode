/*
  Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
  
  This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

  If the length of the array is 0, the function should return init.

  Please solve it without using the built-in Array.reduce method.
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @returns {number}
 */
var reduce = function (nums, fn, init) {
  // 初期値 init を設定
  let val = init;
  // 配列の各要素に対して fn を適用
  for (let i = 0; i < nums.length; i++) {
    // fn の戻り値を val に代入
    val = fn(val, nums[i]);
  }
  // 最終的な val を返す
  return val;
};

const nums = [1, 2, 3];
const fn = function sum(acc, curr) { return acc + curr; }
const init = 0;

console.log(reduce(nums, fn, init));