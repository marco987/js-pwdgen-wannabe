// Variabili

var nome, cognome, colore, password;

nome = prompt("Inserisci il tuo Nome");
cognome = prompt("Inserisci il tuo Cognome");
colore = prompt("Inserisci il tuo Colore preferito");
password = nome + cognome + colore;

document.getElementById("password").innerHTML=password;
