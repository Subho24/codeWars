function sumPairs(int, s) {
    let sumArr = [];
    let indexDiff = 0;
    for(let i = 0; i < int.length; i++) {
        for(let n = i + 1; n < int.length; n++) {
            let firstValue = int[i];
            let secondValue = int[n];
            let sum = firstValue + secondValue;
            if(sum === s) {
                sumArr.push({"firstValue": firstValue, "secondValue": secondValue})
            }
        }
    }
    console.log(sumArr)
    for(let i = 0; i < sumArr.length; i++) {
        
    }
}


sumPairs([1,2,3,4,5], 6);