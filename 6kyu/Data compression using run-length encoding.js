// https://www.codewars.com/kata/578bf2d8daa01a4ee8000046

// My solution

function encode(str) {
    let count = 0
    let newStr = ''
      for (let i = 0; i < str.length; i++) {
        count ++
        if(str[i] !== str[i + 1]){
          newStr += count + str[i]
          count = 0
        }
      }
  return newStr
  }
  
  function decode(str) {
    let newStr = ''
    let count = ''
    
    for(let i = 0; i < str.length; i++) {
      if(parseInt(str[i]) == str[i]) {
        count += str[i]
      } else {
        newStr += str[i].repeat(parseInt(count))
        count = ''
      }
    }
    return newStr
    }