/* console.log('collegato'); */ // test se funziona
/* class di cui avro bisogno 
value che scrive la persona
    nameField
    kmField
    opt1/2/3
button che mandano i dati (probabilmente non serve modificarlo perche metti l input sul suo genitore FORM)
    calcTicket
dovrebbe bastare un refresh della pagina su questo button
    clearAll
value che viene importanto in questi campi
    nameTicket
    tipologyTicket
    priceTicket
*/

// iniziamo a prenderci le classi tramite delle variabili

const nameFieldEl = document.querySelector('.nameField')
/*  prova
nameFieldEl.value = 'Simone'
console.log(nameFieldEl.value);
 */ // funziona
const kmFieldEl = document.querySelector('.kmField')
/* inutili perche quello che rimane nella barra e il valore su SELECT
const opt1El = document.querySelector('.underage')
const opt2El = document.querySelector('.adult')
const opt3El = document.querySelector('.over_65')
 */
// questa classe e l unica che ci serve ed e quella che dice come l eta della persona
const selectAgeEl = document.querySelector('.selectAge')
//bottoni
const calcTicketEl = document.querySelector('.calcTicket')
const clearAllEl = document.querySelector('.clearAll')
//value di arrivo
const nameTicketEl = document.querySelector('.nameTicket')
const tipologyTicketEl = document.querySelector('.tipologyTicket')
const priceTicketEl = document.querySelector('.priceTicket')

const formEl = document.querySelector('form')
// console.log(formEl);

formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    //prova
    //console.log('nameFieldEl', nameFieldEl.value);
    nameTicketEl.innerHTML = nameFieldEl.value
    if (selectAgeEl.value == 'opt1') {
        priceTicketEl.innerHTML = '4euro'
    } else if (selectAgeEl.value == 'opt2') {
        priceTicketEl.innerHTML = '12euro'
    } else {
        priceTicketEl.innerHTML = '8euro'
    }
})