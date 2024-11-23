function solve(str) {
    const obj = JSON.parse(str);

    Object
    .keys(obj)
    .forEach(key => console.log(`${key}: ${obj[key]}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');