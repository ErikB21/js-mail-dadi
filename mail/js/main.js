//Creo un Array con le diverse email.
//Attraverso un Prompt dovrò richiedere l'email
//Se l'email inserita esiste, allora darò un esito positivo
//Altrimenti darò esito negativo, con la richiesta di una nuova email


let mail = ['erik@gmail.it', 'mike@gmail.it', 'max@gmail.it'];

let richiediMail = prompt('Salve Visitatore! prego, inserire la propria Mail!');

if(richiediMail < mail){
    alert("ATTENZIONE! La Mail inserita non è corretta!");
    prompt("Per favore, inserire una Mail valida!");
    
} else{
    alert("La Mail inserita è corretta!");
}

/////CORREZIONE PROF

/*
const mail = ['erik@gmail.it', 'mike@gmail.it', 'max@gmail.it'];
let richiediMail = prompt('Salve Visitatore! prego, inserire la propria Mail!');

let puoiAccedere = false;

for (let i = 0; i < mail.length; i++){
    if(mail[i] == richiediMail){
        puoiAccedere = true;
    }
}

if(puoiAccedere == true){
    alert('Benvenuto!');
}else{
    alert('Accesso negato!');
    prompt('Inserire una Mail valida!');
}
*/