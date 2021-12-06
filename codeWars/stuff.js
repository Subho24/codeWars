function digital_root(n) {
    let result = sum_numbers(convert_to_number(convert_to_array(n)))
    for(let i = 0; i < result.toString().length; i++) {
      let a = sum_numbers(convert_to_number(convert_to_array(result)));
      let b = a.toString();
      let c = 0
      if(b.length > 0){
         c =  sum_numbers(convert_to_number(convert_to_array(a)));
         return result = c;
      } else {
        return result = a;
      }
    }
    return result
  }
  
  const convert_to_array = (number) => number.toString().split('')
  const convert_to_number = (arr) => arr.map(num => parseInt(num)) 
  const reducer = (a, b) => a + b;
  const sum_numbers = (arr) => arr.reduce(reducer)

  console.log(digital_root(456))


