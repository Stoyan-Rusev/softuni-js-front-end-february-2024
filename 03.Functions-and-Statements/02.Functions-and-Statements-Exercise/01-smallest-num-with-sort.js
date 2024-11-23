function smallestNum(a, b, c) {
    let sortedArr = [a, b, c].sort((a, b) => a - b);
    let smallest = sortedArr[0];
    return(smallest);
}

console.log(smallestNum(600, 342, 123))
console.log(smallestNum(2, 5, 3))
