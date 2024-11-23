function solve(substring, string) {
    let stringArr = string.split(' ');

    for (let word of stringArr) {
        if (word.toLowerCase() === substring.toLowerCase()) {
            return substring;
        }
    }

    return `${substring} not found!`
}

console.log(solve('javascript', 'JavaScript is the best programming language'))
console.log(solve('python', 'JavaScript is the best programming language'))
