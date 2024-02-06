// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, 
// farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)

const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click",
function() {

    // Chiedo all'utente di inserire una parola
    let userWord = prompt("Inserisci una parola");
    
    // Inizializzo la funzione per il controllo della parola palindroma
    function parolaPalindroma(word) {
    
        let i = 0;
    
    // Divido la parola in due per controllare le due metà
        while (i < word.length / 2){
    
            if(word[i] !== word[word.length - 1 - i]){
    
                return false;
            }
    
            i++;
        }
        return true;
    }
    
    document.getElementById(`result`).innerHTML = parolaPalindroma(userWord);
    
})