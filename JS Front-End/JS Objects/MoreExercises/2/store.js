function solve(input){
    const catalogue = {};
    for (let line of input) {
        const [product, price] = line.split(' : ');
        const letter = product.substring(0,1);

        if (!catalogue.hasOwnProperty(letter)) {
            catalogue[letter] = {};
        }

        catalogue[letter][product] = price;
    }

    // const array = Object.entries(catalogue)
    //     .sort((a,b) => a[0].localeCompare(b[0]))

    const getLetters = Object
        .keys(catalogue)
        .sort((a, b) => a.localeCompare(b));

    for (let letter of getLetters) {
        console.log(letter);
        const sortedProducts = Object
            .keys(catalogue[letter])
            .sort((a, b) => a.localeCompare(b));

        for (let product of sortedProducts) {
            console.log(`  ${product}: ${catalogue[letter][product]}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',   
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);