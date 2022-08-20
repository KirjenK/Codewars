// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// My solution

function toCamelCase(str){
    let arr = str.split('')
    let baza = '_-'
    let result = ''
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '_' || arr[i] === '-'){
          arr[i + 1] = arr[i + 1].toUpperCase()
        }
      }
        let newStr = arr.join('')
        for(let i = 0; i < newStr.length; i++) {
          if(!baza.includes(newStr[i])) {
            result += newStr[i]
          }
        }
      return result
    }