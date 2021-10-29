/* 
    PALINDROMA
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma 
*/
let word = '';

while(!isNaN(word)){
    word = prompt('inserisci una parola');
}
console.log('Parola:', word);

const palindromeWord = reverseWord(word);


/**************
  FUNZIONI
 **************/
function reverseWord(palind){ 
    
    let reverse = '';

    for(let i = palind.length - 1; i >= 0; i--){
         reverse += palind[i];
    }
    console.log('parola invertita:', reverse);

    if(palind === reverse){
        console.log("La parola E' palindroma")
    } else{
        console.log("La parola NON E' palindroma")
    }
    
}