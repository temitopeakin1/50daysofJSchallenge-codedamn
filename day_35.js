// Write a JavaScript function to get nth largest element from an unsorted array.

// Input
// nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)

// Output
// 89

function nthlargest(arr, highest) {
	// use array sort method to sort the array in ascending order
    arr.sort((a,b) => a-b)
    return arr[arr.length-highest]
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));