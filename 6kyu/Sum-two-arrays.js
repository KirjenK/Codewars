// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6

// My solution

function addArrays(arr1, arr2) {
    if(arr1.length === 0) {
        return arr2
    } 
    if(arr2.length ===0) {
        return arr1
    }
      let result = []
      let secondArr = []
      let num1 = parseInt(arr1.join(''))
      let num2 = parseInt(arr2.join(''))
      let newStr = String(num1 + num2)
      let charStr = ''
            //   console.log(newStr)
        if(newStr[0] === '-') {
            charStr += newStr[0]
            charStr += newStr[1]
            result.push(parseInt(charStr))
        } 
        else if(newStr[0] !== '-') {
            result.push(parseInt(newStr[0]))
            result.push(parseInt(newStr[1]))
        }
            //   console.log(result)
        for(let i = 2; i < newStr.length; i++) {
            secondArr.push(newStr[i])
        }
            secondArr.join('')
        for(let i = 0; i < secondArr.length; i++) {
            result.push(parseInt(secondArr[i]))
        }
       return result
}