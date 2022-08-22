// https://www.codewars.com/kata/5264d2b162488dc400000001
// My solution
function spinWords(str){
    let arr = str.split(' ')
    let result = []
      for(let i = 0; i < arr.length; i++) {
      if(arr[i].length < 5) {
        result.push(arr[i])
      }
      if(arr[i].length >= 5) {
        result.push((arr[i].split('').reverse().join('')))
      }
      }
    return result.join(' ') 
    }