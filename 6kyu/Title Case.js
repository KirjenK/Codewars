// https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript

function titleCase(main, sec) {
  if (main.length === 0) return '';
  const arr = main.split(' ').map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase());
  if (!sec) {
    return arr.join(' ');
  }
  const arrOfSec = sec.toLowerCase().split(' ');

  const result = arr.map((el) => {
    if (arrOfSec.includes(el.toLowerCase())) {
      return el.toLowerCase();
    }
    return el;
  });
  if (result.length === 1) return `${result[0][0].toUpperCase() + result[0].slice(1)}`;
  return `${result[0][0].toUpperCase() + result[0].slice(1)} ${result.slice(1).join(' ')}`;
}
