// https://www.codewars.com/kata/57a60bad72292d3e93000a5a

// My solution

function toAcronym(str){
    let arr = str.split(' ')
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
      newArr.push(arr[i][0].toUpperCase())
    }
    return newArr.join('')
    }