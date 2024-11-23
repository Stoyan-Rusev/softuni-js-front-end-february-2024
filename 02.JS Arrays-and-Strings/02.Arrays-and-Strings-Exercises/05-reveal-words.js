function solve(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for (let currentWord of wordsArr) {
        for (let i = 0; i < textArr.length; i++) {
            let textWord = textArr[i];
            if (textWord.length === currentWord.length && textWord === '*'.repeat(textWord.length)) {
                textArr[i] = currentWord
                break
            }
        }
    }

    return textArr.join(' ')
}   

console.log(solve('great', 'softuni is ***** place for learning new programming languages'))
console.log(solve('great, learning', 'softuni is ***** place for ******** new programming languages'))

