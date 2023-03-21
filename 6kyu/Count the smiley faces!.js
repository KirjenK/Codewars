// https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript

function countSmileys(arr) {
  const smileyFacesWithoutNose = ':);):D;D';
  const smileyFacesWithNose = ':-):~);-);~):-D:~D;-D;~D';
  let counter = 0;
  arr.forEach((el) => {
    const checkFaceNoNose = el.slice(el.length - 2);
    const checkFaceWithNose = el.slice(el.length - 3);

    if (smileyFacesWithoutNose.includes(checkFaceNoNose) && checkFaceNoNose.length > 1) {
      counter += 1;
    } else if (smileyFacesWithNose.includes(checkFaceWithNose) && checkFaceWithNose.length > 1) {
      counter += 1;
    }
  });
  return counter;
}

const res = countSmileys([';]', ':[', ';*', ':$', ';-D']);
console.log(res);
