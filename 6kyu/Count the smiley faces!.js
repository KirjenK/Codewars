// https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript

function countSmileys(arr) {
  const smileyFacesWithoutNose = ':);):D;D';
  const smileyFacesWithNose = ':-):~);-);~):-D:~D;-D;~D';
  let counter = 0;
  let checkStr = '';
  arr.forEach((str) => {
    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      checkStr += char;
    }
    const checkFaceNoNose = checkStr.slice(checkStr.length - 2);
    const checkFaceWithNose = checkStr.slice(checkStr.length - 3);

    if (smileyFacesWithoutNose.includes(checkFaceNoNose) && checkFaceNoNose.length > 1) {
      counter += 1;
    } else if (smileyFacesWithNose.includes(checkFaceWithNose) && checkFaceWithNose.length > 1) {
      counter += 1;
    }
    checkStr = '';
  });
  return counter;
}
