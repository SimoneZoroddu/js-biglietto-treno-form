// diamo delle classi associate agli input e al bottonee


const inputKmEl = document.querySelector('.inputKm')
const inputAgeEl = document.querySelector('.inputAge')
const formEl = document.querySelector('form')
/* // proviamo se funzionano nei log
inputKmEl.value = 10
inputAgeEl.value = 10
formEl.value = 10
console.log(inputKmEl.value, inputAgeEl.value, formEl.value);
 */

const priceTicket = Number(inputKmEl.value) * 0.21
/* inputKmEl.value = 10
console.log(priceTicket); */

formEl.addEventListener('submit', function (e){
    e.preventDefault()
    if (Number(inputAgeEl) < 18) {
        console.log(priceTicket * 0.8);
    } else if (Number(inputAgeEl) <= 65) {
        console.log(priceTicket * 0.6);
    } else {
        console.log(priceTicket);
    }
})
