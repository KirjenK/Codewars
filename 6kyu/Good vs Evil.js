// https://www.codewars.com/kata/52761ee4cffbc69732000738/javascript

function goodVsEvil(good, evil) {
  const hashOfGood = {
    0: 1, 1: 2, 2: 3, 3: 3, 4: 4, 5: 10,
  };
  const hashOfEvil = {
    0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 5, 6: 10,
  };
  const sumOfGoods = good
    .split(' ')
    .map((el, i) => el * hashOfGood[i])
    .reduce((sum, el) => sum + el, 0);

  const sumOfEvils = evil
    .split(' ')
    .map((el, i) => el * hashOfEvil[i])
    .reduce((sum, el) => sum + el, 0);

  if (sumOfEvils > sumOfGoods) return 'Battle Result: Evil eradicates all trace of Good';
  if (sumOfGoods > sumOfEvils) return 'Battle Result: Good triumphs over Evil';
  return 'Battle Result: No victor on this battle field';
}
