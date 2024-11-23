function solve(strArr) {
    let searchedWords = strArr.shift().split(' ').map(word => ({word, occ: 0}));
    for (const currentObj of searchedWords) {
        for (const currentWord of strArr) {
            if (currentObj.word === currentWord) {
                currentObj.occ++;
            }
        }
    }  

    searchedWords
    .sort((a, b) => b.occ - a.occ)
    .forEach(obj => console.log(`${obj.word} - ${obj.occ}`));
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);
console.log('------------------');
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);