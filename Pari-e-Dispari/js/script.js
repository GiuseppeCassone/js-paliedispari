// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.


const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", 
    function(){

        // Chiedo all'utente di scegliere pari o dispari 
            let userChoice = prompt("Scegli pari o dispari");

        while(userChoice !== "pari" && userChoice !== "dispari"){
            userChoice = prompt("Non hai inserito la parola giusta! Scegli pari o dispari");

        }

        // Chiedo all'utente di scegliere un numero da 1 a 5
            let userNumber = Number(prompt("Inserisci un numero da 1 a 5"));

        while(userNumber < 1 || userNumber > 5 || isNaN(userNumber)){
            userNumber = Number(prompt("Non hai inserito un numero tra quelli indicati! Inserisci un numero da 1 a 5"));

        }      

// Inzializzo una funzione per generare un numero random per il pc
        function computerChoice() {
            return Math.floor(Math.random() * 5) + 1;
           
        }

        let computerNumber = computerChoice();
        
        document.getElementById(`user`).innerHTML = userNumber;
        document.getElementById(`computer`).innerHTML = computerNumber;
        
// Sommo il numero scelto dall'utente e dal pc
        let sum = userNumber + computerNumber;
        console.log(sum);

// Stabilisco se la somma è pari o dispari
        function check(){

            if(sum % 2 === 0){

                return "pari";
            
            } else {

                return "dispari";
            }

        }
        
        // Stabilisco se l'utente ha vinto o perso 
        if(userChoice == check()){        
            document.getElementById(`result`).innerHTML = "Hai vinto";
        
        }else {
            document.getElementById(`result`).innerHTML = "Hai perso";
        }
})
