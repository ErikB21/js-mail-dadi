//Creo un Array con le diverse email.
//Attraverso un Prompt dovrò richiedere l'email
//Se l'email inserita esiste, allora darò un esito positivo
//Altrimenti darò esito negativo, con la richiesta di una nuova email


let email = ['luca@gmail.com', 'mario@hotmail.it', 'martina@yahoo.it'];

let richiediEmail = prompt('Inserire email');

if(richiediEmail < email){
    alert('La email inserita non è corretta!');
    
} else{
    alert('La email inserita è corretta!')
}

