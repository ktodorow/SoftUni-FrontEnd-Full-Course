//Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
//Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
//Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%

function solve(quantity, typeOfPlan, dayOfWeek) {
    let finalPrice;
    let price;
    let discount;

    if (typeOfPlan === 'Students') {
        if (dayOfWeek === 'Friday') {
            price = 8.45;
        }
        else if (dayOfWeek === 'Saturday') {
            price = 9.80;
        }
        else if (dayOfWeek === 'Sunday') {
            price = 10.46;
        }

        if (quantity >= 30) {
            discount = 0.15;
        }
    }
    else if (typeOfPlan === 'Business') {
        if (dayOfWeek === 'Friday') {
            price = 10.90;
        }
        else if (dayOfWeek === 'Saturday') {
            price = 15.60;
        }
        else if (dayOfWeek === 'Sunday') {
            price = 16;
        }

        if (quantity >= 100) {
            quantity -= 10;
        }
    }
    else if (typeOfPlan === 'Regular') {
        if (dayOfWeek === 'Friday') {
            price = 15;
        }
        else if (dayOfWeek === 'Saturday') {
            price = 20;
        }
        else if (dayOfWeek === 'Sunday') {
            price = 22.50;
        }

        if (quantity >= 10 && quantity <= 20 ) {
            discount = 0.05;
        }
    }

    finalPrice = quantity * price;

    if(discount) {
        finalPrice -= finalPrice * discount;
    }

    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}