function solve(text, word) {
    let censoredWord = '*'.repeat(word.length);
    while (text.includes(word)) {
        text = text.replace(word, censoredWord);
    }
    console.log(text)
}

solve('A small sentence with some words', 'small')
solve('A small sentence with some small words', 'small')
