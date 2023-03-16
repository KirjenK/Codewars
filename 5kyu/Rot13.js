// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  const hash = {
    a: 'n',
    b: 'o',
    c: 'p',
    d: 'q',
    e: 'r',
    f: 's',
    g: 't',
    h: 'u',
    i: 'v',
    j: 'w',
    k: 'x',
    l: 'y',
    m: 'z',
    n: 'a',
    o: 'b',
    p: 'c',
    q: 'd',
    r: 'e',
    s: 'f',
    t: 'g',
    u: 'h',
    v: 'i',
    w: 'j',
    x: 'k',
    y: 'l',
    z: 'm',
  };

  let result = '';
  let i = 0;

  while (i < message.length) {
    const char = message[i].toLowerCase();
    if (hash[char]) {
      if (message[i] === message[i].toUpperCase()) {
        result += hash[char].toUpperCase();
      } else {
        result += hash[char];
      }
    } else {
      result += message[i];
    }
    i++;
  }
  return result;
}