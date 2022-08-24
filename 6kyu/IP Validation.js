// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

// My solution

let net = require('net')
let isValidIP = (str) => net.isIPv4(str)

// Second solution

function isValidIP(str) {
    const nums = '1234567890.'
    
    if (str === '') return false
    
    for(let i = 0; i < str.length; i++) {
      if(!nums.includes(str[i])) {
        return false
      }
    }
      let arr = str.split('.')
      let newArr = []
  
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== ''){
          newArr.push(arr[i])
        }
      }  
      let checkZero = []
       for(let i = 0; i < newArr.length; i++) {
         if(newArr[i].length > 4 || parseInt(newArr[i]) > 255 || parseInt(newArr[i] < 0)) {
          return false
          }
          if(newArr[i][0] === '0') {
          checkZero.push(newArr[i])
          }
          if(newArr.length !== 4) {
          return false
          }
        }
        
        for(let i = 0; i < checkZero.length; i++) {
          if (checkZero[i].length > 1) {
            return false
          }
        }
    return true
  }