// https://www.codewars.com/kata/5412509bd436bd33920011bc

// My solution

function maskify(cc) {
    let newStr = ''
    if (cc.length <= 4) {
        return cc
    }
    for (let i = 0; i < cc.length - 4; i++) {
      newStr += '#'
    }
    return newStr + cc.slice(cc.length-4)
  }   