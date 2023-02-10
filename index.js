function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    if(array[i] < target) {
      for (let j = (i+1); j < array.length; j++){
        if(array[i]+array[j] === target) {
          console.log(i, j)
          return true
        }
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  O(n^2)  sadface
*/

/* 
  Add your pseudocode here

  not sure what this is...

  I wanted to use a new Map to make just O(n) runtime, but I kept moving instead

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
