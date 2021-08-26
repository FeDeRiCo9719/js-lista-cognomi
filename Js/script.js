/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili. */

//1. chiedi all’utente il cognome | var=prompt
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’ | array + push
//3. stampa la lista ordinata alfabeticamente |
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova | stampare con le posizioni corrette

// INPUT
//1. chiedi all’utente il cognome
var user_surname = prompt("Inserisci il tuo cognome");

//2. inseriscilo in un array con altri cognomi
var lista = ["Baggio", "Eboli", "Abaco", "De Luca", "Cacciatore"]; 
lista.push(user_surname);
for ( var i = 0; i<lista.length; i++) {
    console.log(lista[i]);
}

//3. stampa la lista ordinata alfabeticamente
document.getElementById("List").innerHTML = lista.sort();