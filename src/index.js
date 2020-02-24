import validator from './validator.js';

const validar = document.getElementById('btnValidar')
const cardData = document.getElementById('cardData')
const validated = document.getElementById('validated')

validar.addEventListener('click',() =>{
    const cardNumber = document.getElementById('cardNumber').value 
    //console.log(cardNumber)
    //console.log(validator.isValid(cardNumber))
cardData.style.display='none'
validated.style.display='block'

});

//console.log(validator)
//console.log(validator.isValid)
//console.log(validator.isValid('4556364607935616'))