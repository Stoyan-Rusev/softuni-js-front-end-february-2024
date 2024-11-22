function solve(someText) {
    someText = String(someText)
    let regex = /[a-zA-Z0-9]+/g;
    let matchedWords = someText.match(regex)
    if (matchedWords) {
        for (let i=0; i<matchedWords.length; i++) {
            matchedWords[i] = matchedWords[i].toUpperCase()
        }
        console.log(matchedWords.join(', ')) 
    }
}

solve('Hi, how are you?')
solve('Hello')
solve('')
solve(3)