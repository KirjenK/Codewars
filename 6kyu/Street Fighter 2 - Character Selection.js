function streetFighterSelection(arr, pos, way) {
  let idxArr = pos[0];
  let idxHero = pos[1];
  let position = arr[idxArr][idxHero];
  const res = [];
  for (let i = 0; i < way.length; i += 1) {
    if (way[i] === 'up' && arr[0].includes(position)) {
      res.push(position);
      continue;
    }
    if (way[i] === 'up' && arr[1].includes(position)) {
      idxArr -= 1;
      position = arr[idxArr][idxHero];
      res.push(position);
      continue;
    }
    if (way[i] === 'left' && idxHero === 0) {
      idxHero = 5;
      position = arr[idxArr][idxHero];
      res.push(position);
      continue;
    }
    if (way[i] === 'left' && idxHero !== 0) {
      idxHero -= 1;
      position = arr[idxArr][idxHero];
      res.push(position);
      continue;
    }
    if (way[i] === 'right' && idxHero !== 5) {
      idxHero += 1;
      position = arr[idxArr][idxHero];
      res.push(position);
      continue;
    }
    if (way[i] === 'right' && idxHero === 5) {
      idxHero = 0;
      position = arr[idxArr][idxHero];
      res.push(position);
      continue;
    }
    if (way[i] === 'down' && arr[0].includes(position)) {
      idxArr += 1;
      position = arr[idxArr][idxHero];
      res.push(position);
      continue;
    }
    if (way[i] === 'down' && arr[1].includes(position)) {
      res.push(position);
      continue;
    }
  }
  return res;
}