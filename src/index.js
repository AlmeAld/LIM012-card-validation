import validator from './validator.js';

const btnValidar = document.getElementById('btnValidar')

const btnVolver = document.getElementById('btnVolver')
const numValidado = document.getElementById('numValidado')
const contenedor2= document.getElementById('contenedor2')
const contenedor1= document.getElementById('contenedor1')
//debugger


btnValidar.addEventListener('click', () =>{
    
    const cardNumber = document.getElementById('cardNumber').value 
    
    const isValid =  validator.isValid(cardNumber)
    
    if(isValid === true){
        numValidado.textContent = validator.maskify(cardNumber) + 'TARJETA VALIDA'        
    }else{        
        numValidado.textContent = validator.maskify(cardNumber) + 'TARJETA INVALIDA'        
    }
    contenedor2.style.display='block'
    contenedor1.style.display='none'
}); 


btnVolver.addEventListener('click', () => {

    window.location.reload(false)
});