function solve(arr) {
    for (let num of arr) {
        let isPalindrome = true;
        let numAsString = num.toString();

        for (let i = 0; i < Math.floor(numAsString.length / 2); i++) {
            if (numAsString[i] !== numAsString[numAsString.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }

        console.log(isPalindrome);
    } 
}

// solve([123,323,421,121])
// console.log('-------------')
solve([32,2,232,1010])
