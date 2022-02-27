// Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Hint You can check whether the sum of the two sides of a triangle is greater than the third side in all possible combinations.

// CHALLENGES (0/3 DONE)

// isTriangle(1,2,2) should return true
// isTriangle(7,2,2) should return false
// isTriangle(7, 14, 16) should return true

function isTriangle(a, b, c) {
    // your code here
    return a+b>c && b+c>a && c+a>b
  }
  console.log(isTriangle(7,2,2));