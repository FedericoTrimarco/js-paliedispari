/* 
    PARI E DISPARI
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
 */

let choise = '';

do{
    choise = prompt('pari o dispari?');
} while(choise !== 'pari' || choise !== 'dispari' || !isNaN(choise));

console.log(choise);