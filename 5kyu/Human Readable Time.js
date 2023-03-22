function humanReadable(seconds) {
  let time = seconds / 60;
  let hours = '';
  let mins = '';
  let secs = '';
  if (time <= 60) {
    const str = String(time);
    const findIndexDot = str.indexOf('.');
    if (findIndexDot === -1) {
      mins = str;
      if (mins === '60') return '01:00:00';
      if (mins.length > 1) return `00:${mins}:00`;
      return `00:0${mins}:00`;
    }
    mins = str.slice(0, findIndexDot);
    secs = ((+str.slice(findIndexDot)) * 60).toFixed();
    if (mins.length === 1) {
      mins = `0${mins}`;
    }
    if (secs.length === 1) {
      secs = `0${secs}`;
    }
    return `00:${mins}:${secs}`;
  }
  if (time > 60) {
    time /= 60;
  }
  const str = String(time);

  const findIndexDot = str.indexOf('.');
  if (findIndexDot === -1) {
    hours = str;
    if (hours.length > 1) return `${hours}:00:00`;
    return `0${hours}:00:00`;
  }
  hours = str.slice(0, findIndexDot);
  mins = String(Math.floor(+str.slice(findIndexDot) * 60));

  secs = String(+str.slice(findIndexDot) * 60);

  const findIndexDotSec = secs.indexOf('.');
  secs = (+secs.slice(findIndexDotSec) * 60).toFixed();

  if (mins.length === 1) {
    mins = `0${mins}`;
  }
  if (hours.length === 1) {
    hours = `0${hours}`;
  }

  if (secs.length === 1) {
    secs = `0${secs}`;
  }
  if (+secs > 59) {
    secs = '00';
  }
  return `${hours}:${mins}:${secs}`;
}

console.log(humanReadable(275520));
