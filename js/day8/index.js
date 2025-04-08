/*

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

*/

var compose = function (functions) {
  return function (x) {
    // 空の配列の場合は入力をそのまま返す
    if (functions.length === 0) return x;

    // reduceRightを使用して右から左へ関数を実行
    return functions.reduceRight((result, fn) => fn(result), x);
  }
}


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
