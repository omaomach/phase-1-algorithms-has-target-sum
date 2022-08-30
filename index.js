function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === (target - array[i])) {
        return true
      }
    }
  }
  return false

}



/* 
  Write the Big O time complexity of your function here
  This is the naive solution or the brute force
    For every n elements in the input array, we need to check it against the remaining n elements to see if their sum equal the target
      that will be n * n
        thus the Big O time complexity is O(n*n)
*/

/* 
  Add your pseudocode here
    Find 2 numbers in the array that when added equal the target
    pass in 2 parameters to the function, the array and the target
      Loop thro each number in the array, pick one
        Loop thro each number in the array again, this time exclude the previously selected
          add the 2 numbers that equate to the target
            if their, return true
            else return false
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

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10, 14, 4, 6, 30], 50));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([15, 19, 4, 10, 30], 8));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
