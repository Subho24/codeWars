const obj = {};

function count(string) {
  if (string === undefined) {
    return obj;
  }else {
  for (let i = 0; i < string.length; i++) {
    obj[string[i]] = 0;
  }
  for (let i = 0; i < string.length; i++) {
    obj[string[i]]++;
  }
  return obj;
}
}

console.log(count('hgfjhgdfgkjhffgdfgkhujhfytujkhiojlkjhgfdyhgfj'));

