// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// My solution

function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
         return arr[i]
       } 
     }
   }

// Second solution

const findUniq = (arr) => arr.filter((el) => arr.indexOf(el) == arr.lastIndexOf(el)).pop()

// Third solution

function findUniq (arr) {
    arr.sort((a, b) => a - b)
    return arr[0] == arr[1] ? arr.pop() : arr[0]
    }