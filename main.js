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
const opt1El = document.querySelector('.opt1')
const opt2El = document.querySelector('.opt2')
const opt3El = document.querySelector('.opt3')
//bottoni
const calcTicketEl = document.querySelector('.calcTicket')
const clearAllEl = document.querySelector('.clearAll')
//value di arrivo
const nameTicketEl = document.querySelector('.nameTicket')
const tipologyTicketEl = document.querySelector('.tipologyTicket')
const priceTicketEl = document.querySelector('.priceTicket')