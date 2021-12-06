let reversed_word
let index_of_reversed_word
function spinwords(string) {
    let words_arr = string.split(' ');
    for(let i = 0; i < words_arr.length; i++) {
        if (words_arr[i].length > 5 ) {
            index_of_reversed_word = words_arr.indexOf(words_arr[i])
           reversed_word = words_arr[i].split('').reverse('').join('')
           words_arr[index_of_reversed_word] = reversed_word;
        }
    }
    return words_arr.join(' ');

}

console.log(spinwords("You are almost to the last test"))