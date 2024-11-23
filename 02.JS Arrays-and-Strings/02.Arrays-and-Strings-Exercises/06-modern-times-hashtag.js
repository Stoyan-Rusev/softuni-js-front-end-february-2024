function solve(string) {
    const regex = /#\b([A-Za-z]+)\b/g;
    let matches = string.match(regex);

    for (let match of matches) {
        console.log(match.substring(1));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')