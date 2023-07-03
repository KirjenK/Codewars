// https://www.codewars.com/kata/582887f7d04efdaae3000090/javascript

function findSenior(list) {
  const sorted = [...list];
  sorted.sort((a, b) => b.age - a.age);
  const maxAge = sorted[0].age;
  return sorted.filter((prog) => prog.age === maxAge);
}
