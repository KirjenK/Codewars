// https://www.codewars.com/kata/56747fd5cb988479af000028

// My solution
function getMiddle (str) {
    let firstIndex
    let secondIndex
      if(str.length % 2 === 0) {
        firstIndex = str[str.length / 2 - 1]
        secondIndex = str[str.length / 2]
        return firstIndex + secondIndex 
      } 
      else if(str.length % 2 !== 0) {
      firstIndex = str[Math.floor(str.length / 2)]
      }
      return firstIndex
  }