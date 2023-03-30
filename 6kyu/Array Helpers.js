// https://www.codewars.com/kata/525d50d2037b7acd6e000534/javascript

Object.assign(Array.prototype, {
  square() {
    return this.map((el) => el ** 2);
  },
  cube() {
    return this.map((el) => el ** 3);
  },
  average() {
    return this.reduce((sum, el) => sum + el, 0) / this.length;
  },
  sum() {
    return this.reduce((sum, el) => sum + el, 0);
  },
  even() {
    return this.reduce((res, el) => {
      el % 2 === 0 ? res.push(el) : null;
      return res;
    }, []);
  },
  odd() {
    return this.reduce((res, el) => {
      el % 2 !== 0 ? res.push(el) : null;
      return res;
    }, []);
  },
});
