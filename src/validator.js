const validator = {
  // ...
};

export default validator;
const numTarjeta = '4556364607935616';
//let numero = prompt('¿Cual es el número de tu tarjeta?')
let arr = numTarjeta.split('').reverse()
let suma = 0;
let n = 0;
for(let i=0; i<arr.length; i++){
  if(i%2 === 0){
    n= parseInt(arr[i])*2;
    if(n>=10){
      n= (n-10)+1
    } 
  } else{
    n= parseInt(arr[i])
  }
  suma = suma + n
}