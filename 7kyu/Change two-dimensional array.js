// https://www.codewars.com/kata/581214d54624a8232100005f

// My solution
function matrix(arr) {
    arr.map((el, i) => {
      if(arr[i][i] < 0) {
      return arr[i][i] = 0
      } else {
      return arr[i][i] = 1 
    }})
    return arr
}