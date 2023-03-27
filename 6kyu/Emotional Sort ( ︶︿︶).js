// https://www.codewars.com/kata/5a86073fb17101e453000258/javascript

function sortEmotions(arr, test) {
  const happyToUnHappy = [':D', ':)', ':|', ':(', 'T_T'];
  const arrOfIndex = [];

  arr.forEach((el) => {
    const indexOfEmotion = happyToUnHappy.indexOf(el);
    arrOfIndex.push(indexOfEmotion);
  });

  if (test) {
    return arrOfIndex
      .sort((a, b) => a - b)
      .map((el) => happyToUnHappy[el]);
  }
  return arrOfIndex
    .sort((a, b) => b - a)
    .map((el) => happyToUnHappy[el]);
}
