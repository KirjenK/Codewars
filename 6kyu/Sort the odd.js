function sortArray(arr) {
  const isOddArr = arr.every((el) => el % 2 !== 0);
  if (isOddArr) {
    return arr.sort((a, b) => a - b);
  }
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      const temp = arr[j];
      if (arr[j] % 2 !== 0 && arr[i] % 2 !== 0 && arr[j] < arr[i]) {
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
