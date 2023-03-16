// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(str) {
  const hash = {};
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i].toLowerCase();
    if (!hash[char]) {
      hash[char] = true;
    }
  }
  const regex = /[A-z]/;
  const ourKeys = Object.keys(hash).filter((el) => regex.test(el));
  console.log(ourKeys);
  return ourKeys.length === 26;
}