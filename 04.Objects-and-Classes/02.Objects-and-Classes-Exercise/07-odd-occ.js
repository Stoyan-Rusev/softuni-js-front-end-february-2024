function solve(str) {
    const strArr = str.split(' ').map(el => el.toLowerCase());
    let wordOcc = {};
    let oddOcc = [];

    for (let word of strArr) {
        if (!wordOcc[word]) {
            wordOcc[word] = 0
        }

        wordOcc[word]++;
    }

    for (key in wordOcc) {
        if (wordOcc[key] % 2 !== 0) {
            oddOcc.push(key);
        }
    }

    console.log(oddOcc.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');