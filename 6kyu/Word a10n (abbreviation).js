// https://www.codewars.com/kata/5375f921003bf62192000746/javascript

function abbreviate(str) {
  let word = '';
  let res = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (i === str.length - 1) {
      word += char;
      const slicedWord = word.slice(1, -1);
      slicedWord.length > 1
        ? res += word[0] + (word.length - 2) + word[word.length - 1]
        : res += word;
    }
    if (/\W/.test(char)) {
      const slicedWord = word.slice(1, -1);
      slicedWord.length > 1
        ? res += word[0] + (word.length - 2) + word[word.length - 1] + char
        : res += word + char;
      word = '';
    } else {
      word += char;
    }
  }
  return res;
}


// second solution 

const find = /[a-z]{4,}/gi;

function rep(match) {
  return match[0] + (match.length - 2) + match[match.length - 1];
}

function abbreviate(str) {
  return str.replace(find, rep);
}