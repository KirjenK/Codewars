function queueTime(customers, n) {
  if (n === 1) return customers.reduce((time, customer) => time + customer, 0);
  if (customers.length <= 0) return 0;
  if (customers.length === 1) return customers[0];

  const times = [...customers];
  let availiableTills = n;
  let checkArr = [];
  let generalTimes = 0;
  let avTills = 0;

  for (let i = 0; i < times.length; i += 1) {
    if (availiableTills === 0) {
      checkArr.sort((a, b) => a - b);
      const minTime = checkArr[0];
      generalTimes += minTime;
      checkArr = checkArr
        .map((el) => el - minTime);

      checkArr.forEach((el) => {
        if (el <= 0) {
          avTills += 1;
        }
      });
      checkArr = checkArr.filter((el) => el > 0);
      availiableTills += avTills;
      avTills = 0;
    }
    if (availiableTills > 0) {
      checkArr.push(times[i]);
      availiableTills -= 1;
    }
  }
  if (checkArr.length === 1) {
    return generalTimes;
  }
  if (checkArr.length === customers.length) {
    return checkArr.sort((a, b) => b - a)[0];
  }
  return generalTimes + checkArr.sort((a, b) => b - a)[0];
}
