 //For testing just use command "npx jest" or "npm test"

const areCaseSensitiveAnagrams = (str1, str2) => {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
      return false;
    }
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
  
    return sortedStr1 === sortedStr2;
  }

  //For providing input yourself and execute the anagram.js 
    //remove comments off the below five line program


// const prompt = require('prompt-sync')();
// const inputStr1 = prompt("Enter the first string: ");
// const inputStr2 = prompt("Enter the second string: ");
// const result = areCaseSensitiveAnagrams(inputStr1, inputStr2);
// result ? console.log("Both input strings are case-sensitive anagrams")  : console.log("Both input strings are not case-sensitive anagrams"); 


  module.exports = { areCaseSensitiveAnagrams };
