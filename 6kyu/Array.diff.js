// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(arr, test) {
  return arr.reduce((result, el) => {
    if (test.indexOf(el) === -1) {
      result.push(el)
    }
    return result
  }, [])
}