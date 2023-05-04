const find = /[a-z]{4,}/gi;

function rep(match) {
  return match[0] + (match.length - 2) + match[match.length - 1];
}

function abbreviate(str) {
  return str.replace(find, rep);
}

console.log(abbreviate('You need, need not want, to complete this code-wars mission'));
