function score( dice ) {
    let sum = 0;
    let one = 0; let two = 0; let three = 0; let four = 0; let five = 0; let six = 0;
    for(let i = 0; i < dice.length; i++) {
        if (dice[i] === 1) {
            one += 1
        }
        if (dice[i] === 2) {
            two += 1
        }
        if (dice[i] === 3) {
            three += 1
        }
        if (dice[i] === 4) {
            four += 1
        }
        if (dice[i] === 5) {
            five += 1
        }
        if (dice[i] === 6) {
            six += 1
        }
    }
    if (one >= 3) {
        sum += 1000;
    } else if (one === 1) {
        sum += 100
    }
    if (five === 3) {
        sum += 500;
    } else if (five === 1) {
        sum += 50
    }
    if (two === 3) {
        sum += 200;
    }
    if (three === 3) {
        sum += 300;
    }
    if (four === 3) {
        sum += 400;
    }
    if (six === 3) {
        sum += 600;
    }
    return sum;
}
console.log(score([1,1,1,1,]));