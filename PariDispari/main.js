/* 
     PARI E DISPARI
     L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
     Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
     Sommiamo i due numeri
     Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
     Dichiariamo chi ha vinto.
 */


let choiseUser = '';
let choisePc = '';
// scelta pari o dispari utente
while(choiseUser !== 'pari' && choiseUser !== 'dispari'){
    choiseUser = prompt('pari o dispari?');
}
// scelta pari o dispari pc
if(choiseUser =='pari'){
    choisePc = 'dispari';
} else {
    choisePc = 'pari';
}
// stampa scelta
console.log('Scelta Utente:', choiseUser);
console.log('Scelta PC:', choisePc);

// scelta numero da 1 a 5 utente
let userNumber = 0;
while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)){
    userNumber = parseInt(prompt('scegli un numero da 1 a 5'));
}
console.log("Numero inserito dall'utente:", userNumber);

// scelta numero da 1 a 5 PC
let numRandComputer = randomPc(1, 5);
console.log('Numero randomico PC:', numRandComputer);

// somma dei due numeri
let somma = userNumber + numRandComputer;
console.log('La somma dei due numeri è:', somma);

// controllo pari o dispari
let oddOrEven = EvenOrOdd(somma);
console.log('La somma dei due numeri è un numero:', oddOrEven);

// scelta vincitore
if(choiseUser === oddOrEven){
  console.log('HAI VINTO!');
} else{
    console.log('VINCE IL COMPUTER');
}




/*************
FUNZIONI 
************/

function randomPc(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function EvenOrOdd(num1){
    
    if(num1 % 2 === 0){
        return 'pari';
    } 
        
    return 'dispari';
    
}