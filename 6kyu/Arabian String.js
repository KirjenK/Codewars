// https://www.codewars.com/kata/525821ce8e7b0d240b002615/

// My solution

function camelize(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let arr = str.toLowerCase().split('')
    let result = []
    
      for(let i = 0; i < arr.length; i++) {
        if(alphabet.includes(arr[i])) {
          if(i === 0) {
            result.push(arr[i].toUpperCase())
          } else {
            result.push(arr[i])
          }
        } 
           if (!alphabet.includes(arr[i])) {
            if(alphabet.includes(arr[i + 1])) {
              result.push(arr[i + 1].toUpperCase())
              i++
            }
          }
        }
  return result.join('')
  }