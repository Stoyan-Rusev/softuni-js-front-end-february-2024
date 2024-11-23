function solve(arr, num) {
    for (i=0; i<num; i++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }

    console.log(arr.join(' '))
}

solve([51, 47, 32, 61, 21], 2);