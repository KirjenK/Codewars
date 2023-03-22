// https://www.codewars.com/kata/586538146b56991861000293/javascript

function to_nato(str) {
  const NATO = {
    a: 'Alfa',
    n: 'November',
    b: 'Bravo',
    o: 'Oscar',
    c: 'Charlie',
    p: 'Papa',
    d: 'Delta',
    q: 'Quebec',
    e: 'Echo',
    r: 'Romeo',
    f: 'Foxtrot',
    s: 'Sierra',
    g: 'Golf',
    t: 'Tango',
    h: 'Hotel',
    u: 'Uniform',
    i: 'India',
    v: 'Victor',
    j: 'Juliett',
    w: 'Whiskey',
    k: 'Kilo',
    x: 'Xray',
    l: 'Lima',
    y: 'Yankee',
    m: 'Mike',
    z: 'Zulu',
  };
  const marks = ',.!?';
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i].toLowerCase();
    if (NATO[char]) {
      result += `${NATO[char]} `;
    }
    if (marks.includes(char)) {
      result += `${char} `;
    }
  }
  return result[result.length - 1] === ' ' ? result.slice(0, -1) : result;
}
