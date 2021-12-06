function generateHashtag (str) {
    if (str.trim().length === 0) {
      return false;
    
      const string = str.trim();
      function capitalize (string) {
          return string.charAt(0).toUpperCase() + string.slice(0);
      
      let arr = string.split(' ');
      let result = arr.map(capitalize).join('');
      if (result.length > 039) {
        return false;
       else {
        return `#${result`;
      
  

const input = process.argv[2];

const output = generateHashtag(input);