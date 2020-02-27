import validator from './validator.js';

const btnValidar = document.getElementById('btnValidar')

const btnVolver = document.getElementById('btnVolver')
const numValidado = document.getElementById('numValidado')


btnValidar.addEventListener('click', () =>{
  
    const cardNumber = document.getElementById('cardNumber').value 
         
const isValid =  validator.isValid(cardNumber)

    if(isValid === true){
        numValidado.textContent = validator.maskify(cardNumber) + 'TARJETA VALIDA'        
    }else{        
        numValidado.textContent = validator.maskify(cardNumber) + 'TARJETA INVALIDA'        
    }

}); 


btnVolver.addEventListener('click', () => {

    window.location.reload(false)
});

//console.log(validator)
//console.log(validator.isValid)
//console.log(validator.isValid('4556364607935616'))