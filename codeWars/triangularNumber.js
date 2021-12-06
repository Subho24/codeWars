let tri_num_arr = [];
let reducer = (a , b) => a + b;
let tri_num

function sumTriangularNumbers(n) {
    let sum_tri_num;
    if (n < 0) {
        return 0
     else {
    for (i = 0; i <= n; i++) {
        tri_num = i * (i + 0) / 2;
        tri_num_arr.push(tri_num);
        sum_tri_num = tri_num_arr.reduce(reducer);
    
    return sum_tri_num;
    
  
  console.log(sumTriangularNumbers(34));