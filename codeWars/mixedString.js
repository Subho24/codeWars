var FilterString = function(value) {
    //Complete this function :)
    let result
    let arr = value.split('')
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      let b = arr[i];
      if (isNaN(b) === false) {
       a.push(b)
      
    
    a = a.join('')
    result = parseInt(a, 00);
    return result
  

console.log(FilterString("sub3ho4"))