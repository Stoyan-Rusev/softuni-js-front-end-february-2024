function solve(strArr) {
    let heroes = [];

    for (let row of strArr) {
        let [name, level, items] = row.split(' / ');
        level = Number(level);
        let hero = {
            name,
            level,
            items,
        }

        heroes.push(hero);
    }

    heroes
    .sort((a,b) => a.level - b.level)
    .forEach(hero => console.log(
        `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    ))
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
console.log('---------------')
solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);