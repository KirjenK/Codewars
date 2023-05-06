const countDeafRats = function (town) {
  const idxPiper = town.indexOf('P');
  const leftSide = town.slice(0, idxPiper);
  const rightSide = town.slice(idxPiper + 1);

  const clearTownRight = rightSide.split(' ').filter((el) => el !== '').join('');
  const clearTownLeft = leftSide.split(' ').filter((el) => el !== '').join('');

  let stupidRat = 0;
  for (let i = 0; i < clearTownRight.length; i += 2) {
    if (clearTownRight[i] === '~' && clearTownRight[i + 1] === 'O') {
      stupidRat += 1;
    }
  }
  for (let i = 0; i < clearTownLeft.length; i += 2) {
    if (clearTownLeft[i] === 'O' && clearTownLeft[i + 1] === '~') {
      stupidRat += 1;
    }
  }
  return stupidRat;
};
