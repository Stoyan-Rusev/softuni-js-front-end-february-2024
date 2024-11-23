function solve(arr) {
    arr = arr.sort((a, b) => a - b);
    let newArr = [];

    let startPointer = 0;
    let endPoiter = arr.length-1;

    while (startPointer <= endPoiter) {
        newArr.push(arr[startPointer])
        startPointer++
        if (startPointer <= endPoiter) {
            newArr.push(arr[endPoiter])
            endPoiter--
        }   
    }

    return newArr;
}

console.log(solve([-4, -10, 2, 4, 5, 7, 3]))
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
console.log(solve([1]))
console.log(solve([]))