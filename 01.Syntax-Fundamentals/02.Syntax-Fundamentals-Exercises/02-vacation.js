function solve(peopleAmount, type, day) {
    let totalPrice;
    let singlePrice;

    switch(type) {
        case 'Students':
            if (day === 'Friday') {
                singlePrice = 8.45;
            } else if (day==='Saturday') {
                singlePrice = 9.80;
            } else if (day==='Sunday') {
                singlePrice = 10.46;
            }

            totalPrice = peopleAmount * singlePrice
            if (peopleAmount >= 30) {
                totalPrice *= 0.85
            }
            break;
        
        case 'Business':
            if (day === 'Friday') {
                singlePrice = 10.90;
            } else if (day==='Saturday') {
                singlePrice = 15.60;
            } else if (day==='Sunday') {
                singlePrice = 16;
            }

            totalPrice = peopleAmount * singlePrice
            if (peopleAmount >= 100) {
                totalPrice -= (10*singlePrice)
            }
            break;
        
        case 'Regular':
            if (day === 'Friday') {
                singlePrice = 15;
            } else if (day==='Saturday') {
                singlePrice = 20;
            } else if (day==='Sunday') {
                singlePrice = 22.50;
            }

            totalPrice = peopleAmount * singlePrice
            if (10 <= peopleAmount &&  peopleAmount <= 20) {
                totalPrice *= 0.95
            }
            break;

        
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

// solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")