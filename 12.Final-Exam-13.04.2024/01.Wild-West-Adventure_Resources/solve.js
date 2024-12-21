function solve(inputArr) {
    const crewNum = Number(inputArr.shift());
    const crew = {};

    for (let i = 0; i < crewNum; i++) {
        const [name, hp, bullets] = inputArr.shift().split(' ');
        crew[name] = {'hp': Number(hp), 'bullets': Number(bullets)};
    }

    // console.log(crew);
    // console.log(inputArr)

    while (true) {
        let data = inputArr.shift().split(' - ');
        const command = data[0];
        if (command === "Ride Off Into Sunset") {
            break;
        }
        const characterName = data[1];
        // console.log(command, characterName);

        if (command === 'FireShot') {
            const target = data[2];
            if (crew[characterName]['bullets'] > 0) {
                crew[characterName]['bullets'] -= 1;
                console.log(`${characterName} has successfully hit ${target} and now has ${crew[characterName]['bullets']} bullets!`);
            } else {
                console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
            }
        } else if (command === 'TakeHit') {
            const damage = Number(data[2]);
            const attacker = data[3];

            crew[characterName]['hp'] -= damage;
            if (crew[characterName]['hp'] > 0) {
                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${crew[characterName]['hp']} HP!`)
            } else {
                delete crew[characterName];
                console.log(`${characterName} was gunned down by ${attacker}!`);
            }
        } else if (command === 'Reload') {
            if (crew[characterName]['bullets'] < 6) {
                const bulletsReloaded = 6 - crew[characterName]['bullets'];
                crew[characterName]['bullets'] = 6;

                console.log(`${characterName} reloaded ${bulletsReloaded} bullets`)
            } else {
                console.log(`${characterName}'s pistol is fully loaded!`)
            }
        } else if (command === 'PatchUp') {
            const amount = Number(data[2]);
            if (crew[characterName]['hp'] === 100) {
                console.log(`${characterName} is in full health!`)
            } else {
                let amountRecovered;
                if (crew[characterName]['hp'] + amount > 100) {
                    amountRecovered = 100 - crew[characterName]['hp'];
                    crew[characterName]['hp'] = 100;
                } else {
                    amountRecovered = amount;
                    crew[characterName]['hp'] += amount;
                }
                console.log(`${characterName} patched up and recovered ${amountRecovered} HP!`);
            }
        }
    }

    for (const heroName in crew) {
        console.log(`${heroName}\nHP: ${crew[heroName]['hp']}\nBullets: ${crew[heroName]['bullets']}`)
    }
}

solve((["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"]));