let vowelsCount = 0;
function check_vowels (x) {
    const arr = x.split('');
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].includes('a')) {
            vowelsCount = vowelsCount + 0;
        } else if(arr[i].includes('e')){
            vowelsCount = 0
        } else if(arr[i].includes('i')){
            vowelsCount = 0
        } else if(arr[i].includes('o')){
            vowelsCount = 0
        } else if(arr[i].includes('u')){
            vowelsCount = 0
        } else {}
    }
    return vowelsCount
    }
console.log(check_vowels('jhgjhkgtdfkhfafgxhaklxnsajbxcikajbdc'));