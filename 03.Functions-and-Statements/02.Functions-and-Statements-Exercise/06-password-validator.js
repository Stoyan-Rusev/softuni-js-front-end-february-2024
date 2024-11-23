function solve (password){
    function checkTheLength(pass) {
        if (pass.length > 5 && pass.length < 10) {
            return true;
        }

        return false;
    }

    function checkLettersDigitsOnly(pass) {
        return /^[a-zA-Z0-9]+$/.test(pass);
    }

    function digitsCounter(pass) {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            if (!isNaN(Number(pass[i]))) {
                counter++;
            }
        }

        if (counter >= 2) {
            return true;
        }

        return false;
    }
    
    let lengthCheck = checkTheLength(password);
    let contentCheck = checkLettersDigitsOnly(password);
    let digitCounterCheck = digitsCounter(password);

    if (!lengthCheck) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!contentCheck) {
        console.log("Password must consist only of letters and digits");
    }

    if (!digitCounterCheck) {
        console.log("Password must have at least 2 digits");
    }

    if (lengthCheck && contentCheck && digitCounterCheck) {
        console.log('Password is valid');
    }
}

// solve('logIn');
console.log('---------------------')
solve('asdasd12')