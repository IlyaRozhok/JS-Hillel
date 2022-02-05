function showRandom() {
  const resultArray = [];
  
  function randomArray() {
    const randomNumb = Math.floor(Math.random() * 100 + 1);
    if (!resultArray.includes(randomNumb)) {
      resultArray.push(randomNumb);
    }
  }

  for (;resultArray.length < 100;) {
    randomArray();
  }
  return resultArray;
}