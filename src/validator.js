const validator = {
  // ...
  isValid:(creditCardNumber)=>{

    let arr = creditCardNumber.split('').reverse()
    let suma = 0;
  let n = 0;
  for(let i=0; i<arr.length; i++){
    if(i%2 === 0){
      n= Number(arr[i])*2;
      if(n>=10){
        n= (n-10)+1
      }
  } else{
    n= Number(arr[i])
  }
  suma = suma + n
  }
  return suma % 10 === 0 ? true : false
  },

     

 maskify : (creditCardNumber)=>{
    let arr = creditCardNumber.split('')
    let string = '';
    
    for(let i=0; i < arr.length; i++){
      if(i < 12){
        arr[i] = '#'
        string = string + arr[i]
      }else{
        string = string + arr[i]
      }
    } return string
  }
};
  
export default validator;
