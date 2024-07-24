/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length; // To handle cases where k is larger than the length of nums
  const lastK = nums.splice(nums.length - k, k); // Extract the last k elements
  return nums.unshift(...lastK);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
