//Creo un Array con le diverse email.
//Attraverso un Prompt dovrò richiedere l'email
//Se l'email inserita esiste, allora darò un esito positivo
//Altrimenti darò esito negativo, con la richiesta di una nuova email


let email = ['erik@gmail.com', 'mike@gmail.it', 'max@gmail.it'];

let richiediEmail = prompt('Inserire email');

if(richiediEmail < email){
    alert("ATTENZIONE! L'email inserita non è corretta!");
    prompt("Per favore, inserire un'email valida!");
    
} else{
    alert("L'email inserita è corretta!");
}

