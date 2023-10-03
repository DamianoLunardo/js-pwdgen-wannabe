//nome
const name = prompt("Inserisci il tuo nome");
console.log("Inserisci il tuo nome");

//cognome
const surname = prompt("Inserisci il tuo cognome");
console.log("Inserisci il tuo cognome");

//colore preferito
const color = prompt("Inserisci il tuo colore preferito");
console.log("Inserisci il tuo colore preferito");

// Genera un numero casuale compreso tra 0 e 99
const randomNumber = Math.round(Math.random() * 99);

// Aggiungi il numero casuale alla fine
const password = name + surname + color + randomNumber;

// Seleziona un elemento HTML esistente
const outputElement = document.getElementById("output");

// Imposta il contenuto dell'elemento
outputElement.innerHTML = "La tua password è: " + password;