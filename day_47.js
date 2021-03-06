// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// Note : An empty string is also an isogram

// CHALLENGES (0/3 DONE)

// isIsogram("isogram") should return true
// isIsogram("") should return true
// isIsogram("moOse") should return false

function isIsogram(str) {
    // your code here
    let unique = [...new Set(str.toLowerCase().split(''))];
    return unique.length === str.length ? true : false
  }