// diamo delle classi associate agli input e al bottonee


const inputKmEl = document.querySelector('.inputKm')
const inputAgeEl = document.querySelector('.inputAge')
const buttonEl = document.querySelector('button')
/* // proviamo se funzionano nei log
inputKmEl.value = 10
inputAgeEl.value = 10
buttonEl.value = 10
console.log(buttonEl);
console.log(inputKmEl.value, inputAgeEl.value);
 */

buttonEl.addEventListener('click', function (){
    const priceTicket = Number(inputKmEl.value) * 0.21
    const underAgeSale = priceTicket * 0.8
    const overAgeSale = priceTicket * 0.6
    
    if (Number(inputAgeEl.value) < 18) {
        console.log(underAgeSale.toFixed(2));
    } else if (Number(inputAgeEl.value) >= 65) {
        console.log(overAgeSale.toFixed(2));
    } else {
        console.log(priceTicket);
    }
})


/* 
// diamo delle classi associate agli input e al bottonee


const inputKmEl = document.querySelector('.inputKm')
const inputAgeEl = document.querySelector('.inputAge')
const formEl = document.querySelector('form')
/* // proviamo se funzionano nei log
inputKmEl.value = 10
inputAgeEl.value = 10
formEl.value = 10
console.log(inputKmEl.value, inputAgeEl.value, formEl.value);
 

formEl.addEventListener('submit', function (e){
    e.preventDefault()
    const priceTicket = Number(inputKmEl.value) * 0.21
    const underAgeSale = priceTicket * 0.8
    const overAgeSale = priceTicket * 0.6

    if (Number(inputAgeEl.value) < 18) {
        console.log(underAgeSale.toFixed(2));
    } else if (Number(inputAgeEl.value) >= 65) {
        console.log(overAgeSale.toFixed(2));
    } else {
        console.log(priceTicket);
    }
})
 */