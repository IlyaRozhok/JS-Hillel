 const arr = [3, 2, 1, 0, 4, -20, 73, 3, 11, 1];

 //IndexOf
function showIndexOf(array, searchElem, fromIndex = 0) {
    if (fromIndex >= array.length) {
        return -1;
    }
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElem) {
            return i;
        } 
    } return -1;
}
console.log(showIndexOf(arr, 0)); //log: 3

//lastIndexOf
function showLastIndexOf(array, searchElem, fromIndex) {
    if (array.length) fromIndex = array.length;
    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === searchElem) {
            return i;
        } 
    } return -1;
}
console.log(showLastIndexOf(arr, 1)); //log: 9

//includes
function showIncludes(array, searchElem, fromIndex = 0) {
    if (fromIndex >= array.length) {
        return false;
    }
    for (let i = fromIndex; i < array.length; i++) {
        if (searchElem === array[i]) {
            return true;
        }
    }
    return false;
}
console.log(showIncludes(arr, -20)); //log: true 

//some
function showSome(array, cbForSome) {
    for (let i = 0; i < array.length; i++) {
        if (cbForSome(array[i])) {
            return true;
        }
    } return false;
}
console.log(showSome(arr, (elem) => elem > 72)); //log: true 

//every
function showEvery(array, cbForSome) {
    for (let i = 0; i < array.length; i++) {
        if (!cbForSome(array[i])) {
            return false;
        }
    } return true;
}
console.log(showEvery(arr, (elem) => elem > 72)); //log: false 

//find
function showFind(array, cbForFind) {
    for (let i = 0; i < array.length; i++) {
        if (cbForFind(array[i])) {
            return array[i];
        }
    } return undefined;
}
console.log(showFind(arr, (elem) => elem < 1)); //log: 0
 

//findIndex
function showFindIndex(array, cbForFind) {
    for (let i = 0; i < array.length; i++) {
        if (cbForFind(array[i])) {
            return i;
        }
    } return undefined;
}
console.log(showFindIndex(arr, (elem) => elem < 0)); //log: 5