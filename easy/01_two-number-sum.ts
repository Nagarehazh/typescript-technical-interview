/**
  Write a function that takes in a non-empty array of distinct integers and an  integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
  
  Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

  You can assume that there will be at most one pair of numbers summing up to the target sum.

  Sample Input
    array = [3, 5, -4, 8, 11, 1, -1, 6]
    targetSum = 10

  Sample Output
    [-1, 11] // the numbers could be in reverse order
 */

export function twoNumberSum(array: number[], targetSum: number) {
    // Write your code here.
    for (let i of array) {
        const y = targetSum - i;
        if (array.includes(y) && y !== i) {
            return [i, y]
        }
    }
    return []
}


/* Other option with hash table
export function twoNumberSum(array: number[], targetSum: number) {
    const result: number[] = [];
    const hash: {[key: number]: boolean} = {};
    for (let i = 0; i < array.length; i++) {
        const diff = targetSum - array[i];
        if (hash[diff]) {
            result.push(diff, array[i]);
        } else {
            hash[array[i]] = true;
        }
    }
    return result;
  }
*/