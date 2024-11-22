// USING NUMS:
// ------------------------------------

// FOR LOOP:
function solve(num) {
    let sum = 0;

    for (let i = num; i > 0; i = Math.trunc(i / 10)) {
        sum += i % 10
    }

    console.log(sum)
}
solve(567)


// WHILE LOOP:
function solve(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10
        num = Math.trunc(num / 10)
    }

    console.log(sum)
}
solve(567)



// USING STRING:
// ------------------------------------
function solve(num) {
    let sum = 0;
    let stringNum = String(num);

    for (i = 0; i < stringNum.length; i++) {
        sum += Number(stringNum[i])
    }

    console.log(sum)
}
solve(567)
