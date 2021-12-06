function cakes(recipe, available) {
    let commonArr = [];
    for (let i in recipe) {
        if (available.hasOwnProperty(i)) {
            commonArr.push((i))
        } else {
            commonArr.push((i))
        }
    }
    let result;
    let num = [];
    for(let n = 0; n < commonArr.length; n++) {
        num.push(~~(available[commonArr[n]]/recipe[commonArr[n]]))
        result = Math.min(...num)
    }
    return result;
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

