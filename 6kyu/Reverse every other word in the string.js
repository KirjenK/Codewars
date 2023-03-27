// https://www.codewars.com/kata/58d76854024c72c3e20000de/javascript

function reverse(str) {
  if (!/[A-z]/.test(str)) return ''
  return str
    .split(' ')
    .map((el, i) => {
      if (i % 2 === 0) {
        return el
      }
      return el.split('').reverse().join('')
    }).join(' ')
}

// console.log(reverse('Reverse this string, please!'));
console.log(reverse("I really don't like reversing strings!"));
