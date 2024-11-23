function smallestNum(a, b, c) {
    let smallest;
    
    if (a < b) {
        smallest = a;
    } else {
        smallest = b;
    }

    if (c < smallest) {
        smallest = c;
    }

    return smallest;
}
   
console.log(smallestNum(600,
    342,
    123))
