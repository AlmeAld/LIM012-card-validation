const validator = {
  // ...
  //isValid:(numTarjeta)=>{
  };
const validador = (creditCardNumber) => {

  let arr = creditCardNumber.split('').reverse()
  let suma = 0;
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      n = parseInt(arr[i]) * 2;
      if (n >= 10) {
        n = (n - 10) + 1
      }
    } else {
      n = parseInt(arr[i])
    }
    suma = suma + n
  }
  return suma % 10 === 0
    ? true
    : false
}


 // maskify:(numTarjeta)=>{
    
const mascara = (creditCardNumber) => {

  let arr = creditCardNumber.split('')
  let string = '';
  for (i = 0; i < arr.length; i++) {
    if (i < 12) {
      arr[i] = '#'
      string = string + arr[i]
    } else {
      string = string + arr[i]
    }
  }
  return string
}


export default validator;

