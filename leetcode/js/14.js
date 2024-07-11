/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const element = strs[i];
    // deconstruct the element and add it to map as a key
    // how to deconstruct:
    // let's say that there's str with len of 4
    // there would be Math.floor(len/2) variations
    // 0 to 0
    // 0 to 1
    // if there's already exist, then increase the val

    // deconstruct
    for (let j = 1; j <= Math.ceil(strs.length / 2); j++) {
      let d = element;
      const slice = d.slice(0, j);

      const mapped = map.get(slice);

      if (mapped >= 1) {
        map.set(slice, mapped + 1);
      } else {
        map.set(slice, 1);
      }
    }
  }
  console.log(map);
  return findKeyWithBiggestVal(map);
};

var findKeyWithBiggestVal = function (map) {
  const entries = [...map.entries()];

  // If there's only one key, return the key
  if (entries.length === 1) {
    return entries[0][0];
  }

  // Check if all values are the same
  const allValuesSame = entries.every(
    (entry, _, arr) => entry[1] === arr[0][1],
  );

  if (allValuesSame) {
    return "";
  }

  // Find the key with the largest value
  return entries.reduce((max, entry) => {
    return entry[1] > max[1] ? entry : max;
  })[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

//the actual solutions

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let word of strs) {
    while (word.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
    if (prefix === "") return "";
  }
  return prefix;
};
