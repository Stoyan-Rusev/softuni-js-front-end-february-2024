function solve(name, lastName, hairColor) {
    const person = {
        name,
        lastName,
        hairColor,
    };

    const strJson = JSON.stringify(person);
    console.log(strJson);
}

solve('George', 'Jones', 'Brown');
solve('Peter', 'Smith', 'Blond');