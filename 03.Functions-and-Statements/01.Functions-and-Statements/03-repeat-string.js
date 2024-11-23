function solve(string, count) {
    let repeatedStr = '';
    for (i = 0; i < count; i++) {
        repeatedStr += string;
    }

    return repeatedStr;
}

console.log(solve('abc', 3));
//---------------------------
function second(asd, num) {
    asd = asd.repeat(num);
    return asd;
}

console.log(second('dfg', 3));
