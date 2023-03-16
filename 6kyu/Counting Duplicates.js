// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  const hash = {}

  let i = 0
  while (i < text.length) {
    const char = text[i].toLowerCase()
    if (!hash.hasOwnProperty(char)) {
      hash[char] = 1
    }
    else if (hash.hasOwnProperty(char)) {
      hash[char] += 1
    }
    i++
  }
  const arrOfHashValues = Object.values(hash)

  return arrOfHashValues
    .map((el) => el > 2 ? el = 1 : el - 1)
    .reduce((sum, el) => sum + el, 0)
}