function solve(arr) {
    let newArr = arr.sort((a, b) => a.localeCompare(b));
    let number = 1;

    for (let name of newArr) {
        if (name) {
            console.log(`${number}.${name}`)
            number += 1;  
        }  
    }
}

solve(["John", "Bob", "Christina", "Ema"])
console.log('')
solve(["John", "Bob", '', "Christina", "Ema"])
