// https://www.codewars.com/kata/517abf86da9663f1d2000003

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