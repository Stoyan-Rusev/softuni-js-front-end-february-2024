function solve(strArr) {
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }    
    }

    const cats = {};
    for (info of strArr) {
        const [name, age] = info.split(' ');
        cats[name] = (new Cat(name, age));
    }

    for (const catName in cats) {
        cats[catName].meow();
    }

}

solve(['Mellow 2', 'Tom 5']);