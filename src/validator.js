const validator = {
  // ...
  //isValid:(numTarjeta)=>{
  };
    const numTarjeta = '455636460793561 6'
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
  
    if(suma % 10 === 0){
       console.log('tarjeta valida')
     }else{
      console.log('tarjeta invalida')
      }

 // maskify:(numTarjeta)=>{
    //for(let i=0; i<; i++){

      

    //}
 //}

 /*const numTarjeta = '4556364607935616';
let arr = numTarjeta.split('')
let string = '';

for(i=0; i < arr.length; i++){
  if(i < 12){
    arr[i] = '#'
    //string = string + arr[i]
  }else{
   arr[i]
   string = string + arr[i]
  }
} */





export default validator;

