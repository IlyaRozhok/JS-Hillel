function counter(accum = 0) {
  return {
    increase() {
      return accum++;
    },
    decrease() {
      return accum--;
    },
    value () {
      return accum;
    }
  };
}
const calcNumb = counter();
