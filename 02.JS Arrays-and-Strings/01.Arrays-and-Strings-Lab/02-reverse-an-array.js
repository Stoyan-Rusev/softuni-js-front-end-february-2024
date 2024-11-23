function solve(n, arr) {
    let newArray = [];
    for (let i = n-1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    console.log(newArray.join(' '))
}

solve(3, [10, 20, 30, 40, 50])
