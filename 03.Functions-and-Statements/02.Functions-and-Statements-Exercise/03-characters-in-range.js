function solve(a, b) {
    let first = Math.min(a.charCodeAt(0), b.charCodeAt(0));
    let second = Math.max(a.charCodeAt(0), b.charCodeAt(0));
    let charArr = [];

    for (let i = first+1; i < second; i++) {
        charArr.push(String.fromCharCode(i))
    }

    console.log(charArr.join(' '))
}

solve('a', 'g')
solve('a', 'a')
solve('g', 'a')