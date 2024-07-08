/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const output = [];
  let currentValue = null;
  nums.forEach((element) => {
    if (currentValue != null) {
      output.push(element + currentValue);
      currentValue = element + currentValue;
    } else {
      output.push(element);
      currentValue = element;
    }
  });

  return output;
};

var runningSumBetter = function (nums) {
  for (let index = 1; index < nums.length; index++) {
    nums[index] += nums[index - 1];
  }

  return nums;
};

//runningSum([1, 2, 3, 4]);
console.log(runningSumBetter([1, 2, 3, 4]));
