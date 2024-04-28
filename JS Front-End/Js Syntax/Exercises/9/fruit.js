function solve(fruit, kilograms, price) {
    console.log(`I need $${((kilograms/1000) * price).toFixed(2)} to buy ${(kilograms/1000).toFixed(2)} kilograms ${fruit}.`);
}