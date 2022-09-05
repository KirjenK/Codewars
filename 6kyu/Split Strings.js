https://www.codewars.com/kata/515de9ae9dcfc28eb6000001


// My solution

function solution(str) {
  let newArr = []
  for(let i = 0; i < str.length; i = i + 2) {
   newArr.push(str.slice(i, i + 2))
 }
return newArr.map((el) => el.length % 2 ? el + '_' : el)
}