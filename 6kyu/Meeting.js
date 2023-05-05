// https://www.codewars.com/kata/59df2f8f08c6cec835000012/javascript

function meeting(str) {
  const arr = str.toLowerCase().split(';');

  const sortByAlphabet = arr.sort((a, b) => {
    const [firstNameA, lastNameA] = a.split(':');
    const [firstNameB, lastNameB] = b.split(':');
    if (lastNameA === lastNameB) {
      return firstNameA.localeCompare(firstNameB);
    }
    return lastNameA.localeCompare(lastNameB);
  });

  return sortByAlphabet.map((el) => {
    const [firstName, lastName] = el.split(':');
    return `(${lastName}, ${firstName})`;
  }).join('').toUpperCase();
}
