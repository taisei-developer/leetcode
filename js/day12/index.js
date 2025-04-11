/*

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

*/

var addTwoPromises = async function (promise1, promise2) {
  const [result1, result2] = await Promise.all([promise1, promise2])
  return result1 + result2
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20))
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 20))

addTwoPromises(promise1, promise2).then(console.log)
