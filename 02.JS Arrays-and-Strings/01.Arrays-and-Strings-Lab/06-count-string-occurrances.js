function solve(sentence, word) {
    let wordCounter = 0;
    let wordArr = sentence.split(' ');

    for (let current of wordArr) {
        if (current === word) {
            wordCounter += 1;
        }
    }

    console.log(wordCounter)
}

solve('This is a word and it also is a sentence', 'is')