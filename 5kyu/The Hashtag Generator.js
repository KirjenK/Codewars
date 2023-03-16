// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  const result = str
    .split(' ')
    .filter((el) => el !== '')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join((''));
  if (result.length === 0 || result.length >= 140) return false;
  return `#${result}`;
}