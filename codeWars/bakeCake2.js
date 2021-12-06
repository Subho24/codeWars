function cakes(recipe, available) {
    let result = 0;
    let quot = [];
    for (let i in recipe) {
        quot.push(~~(available[i]/recipe[i]))
    }
    return result = Math.min(...quot)
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 0}))
