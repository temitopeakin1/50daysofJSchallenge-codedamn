// Union of Two Arrays
// Write the code for the function which returns the the union of the two given arrays

const unionOfArrays = (arr1, arr2) => {
    let union = [...new Set([...arr1,...arr2])]  // use of spread operator to convert set to array
       return union;
   };
   
   console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`); // use of template string to print the result
   