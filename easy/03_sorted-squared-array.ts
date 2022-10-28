/*
  Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

    Sample Input
        array = [1, 2, 3, 5, 6, 8, 9]

    Sample Output
        [1, 4, 9, 25, 36, 64, 81]

*/

export function sortedSquaredArray(array: number[]) {
    // Write your code here.
    let startIndex: number = 0;
    let endIndex: number = array.length - 1;
    const result: number[] = [];

    for (let i = endIndex; i >= 0; i--) {
        let start = array[startIndex] ** 2;
        let end = array[endIndex] ** 2
        if (start > end) {
            result[i] = start;
            startIndex++
        } else {
            result[i] = end
            endIndex--;
        }
    }
    return result;
}