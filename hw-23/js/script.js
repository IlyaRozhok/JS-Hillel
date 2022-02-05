function initAccum(accum = 0) {
  let increaseAccum = (num) => accum += num;
  return increaseAccum;
}
const sum = initAccum();
