// https://www.codewars.com/kata/5a905c2157c562994900009d/solutions/javascript?filter=me&sort=best_practice&invalids=false

// My solution #1

function productArray(numbers){
    let newArr = []
    let result = 1
    numbers.map ((el) => {
      return result *= el
    })
    
    numbers.map((el) => {
    newArr.push(result / el)
   })
   return newArr
  }

  //My solution #2

  function productArray(numbers) {
    return numbers.map(el => numbers.reduce((currentEl, sum) => currentEl * sum) / el)
    }