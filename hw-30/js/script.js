function myFlat(arr) {
  if (arguments.length > 1) {
    console.log("Function accepts only 1 argument, too much arguments provided.");
    return;
  }
  let newArr = [];

    for (let elem in arr) {
      if (Array.isArray(arr[elem])) {
        newArr = newArr.concat(myFlat(arr[elem]));
      } else {
        newArr = newArr.concat(arr[elem]);
      }
    }
    return newArr;
  }