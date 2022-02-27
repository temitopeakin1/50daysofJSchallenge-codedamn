// Mumbling
// Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.

// Only alphabets are passed as arguments for the accum(s) funciton

// Example: accum("ZpglnRxqenU") should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu

function accum(s) {
    // your code goes below
    let k, res = '';
    strChar = s.toLowerCase().split('');
    for(let i=0; i<strChar.length; i++) {
        k = i+1;
        let temp = '';
        while(k>0) {
          temp += strChar[i];
          k--;
        }
        temp = capitalFirstLetter(temp);
        res += `${temp}-`
    }
  
    return res.slice(0, -1);
  }
  
  
  function capitalFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }