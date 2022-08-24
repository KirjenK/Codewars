// https://www.codewars.com/kata/52fba2a9adcd10b34300094c

// My solution 

function transpose(matrix) {
    let arr1 = []
    for(let i = 0; i < matrix[0].length; i++) {
      let arr2 = []
        for (let j = 0; j < matrix.length; j++) {
         arr2.push(matrix[j][i])
       }
       arr1.push(arr2)
    }
    return arr1
  }  