// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  const hash = {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    f: '6',
    g: '7',
    h: '8',
    i: '9',
    j: '10',
    k: '11',
    l: '12',
    m: '13',
    n: '14',
    o: '15',
    p: '16',
    q: '17',
    r: '18',
    s: '19',
    t: '20',
    u: '21',
    v: '22',
    w: '23',
    x: '24',
    y: '25',
    z: '26',
  };
  const allLower = text.toLowerCase();
  let result = '';
  for (let i = 0; i < allLower.length; i += 1) {
    const char = allLower[i];
    if (hash[char]) {
      result += `${hash[char]} `;
    }
  }
  return result.slice(0, -1);
}