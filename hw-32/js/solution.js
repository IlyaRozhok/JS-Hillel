function showLi() {
    const lists = document.querySelectorAll('.ulClass > li');
    const arr = [];
    
    for (elem of lists) {
        arr.push(elem.innerHTML);
    }
    return arr;
}
console.log(showLi());