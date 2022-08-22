// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

// My solution

function reverseNumber(n) {
    let reversed = String(n).split('').reverse()
    if (reversed.includes('-')){
        reversed.pop()
        reversed.unshift('-')
    }
    return Number(reversed.join(''))
    }