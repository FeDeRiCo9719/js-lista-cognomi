/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili. */

//1. chiedi all’utente il cognome | var=prompt
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’ | array + push
//3. stampa la lista ordinata alfabeticamente | applicare il metodo Array.sort() 
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova | Creare variabile contatore che parte da 1
//5. Stampare in html

// INPUT
//1. var=prompt
var user_surname = prompt("Inserisci il tuo cognome");
user_surname = user_surname.charAt(0).toUpperCase() + user_surname.slice(1).toLowerCase(); // Convertire il dato per restituire la prima lettera maiuscola e tutto il resto minuscolo
console.log(user_surname);

var position = 0;

//2. array + push
var lista = ["Baggio", "Eboli", "Abaco", "De Luca", "Cacciatore"];
lista.push(user_surname);

//3. applicare il metodo Array.sort()
lista.sort();

//4. Creare variabile contatore che parte da 1
for ( var i = 0; i<lista.length; i++) {
    position++
    console.log(lista[i] + " è in posizione " + position);

    //5. Stampare in html
    document.write(lista[i]+" è in posizione " + position + " | ");
    // document.getElementById("List").innerHTML = lista+" è in posizione " + position + " | ";
}
