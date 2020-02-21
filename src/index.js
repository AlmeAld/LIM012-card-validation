import validator from './validator.js';
//console.log(validator)
//console.log(validator.isValid)
//console.log(validator.isValid('4556364607935616'))
const validar = document.getElementById('validar')
validar.addEventListener('click',() =>{
    const cardNumber = document.getElementById('cardNumber').value 
    console.log(cardNumber)
    console.log(validator.isValid(cardNumber))
cardData.style.display='none'
validated.style.display='block'

});

