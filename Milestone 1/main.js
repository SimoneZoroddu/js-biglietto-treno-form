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

formEl.addEventListener('submit', function (e){
    e.preventDefault()
    const priceTicket = Number(inputKmEl.value) * 0.21


    if (Number(inputAgeEl.value) < 18) {
        console.log(priceTicket * 0.8);
    } else if (Number(inputAgeEl.value) >= 65) {
        console.log(priceTicket * 0.6);
    } else {
        console.log(priceTicket);
    }
})
