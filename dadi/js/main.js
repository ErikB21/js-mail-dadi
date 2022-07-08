//Creo un contatore random che va da 1 a 6
//Creo delle constanti per specificare i dati che voglio siano inseriti
//Se il numero scelto è superiore al numero scelto dal computer, ho vinto
//Altrimenti vince il computer


const puntata = Math.floor(Math.random() * 6) + 1;
const puntataComputer = Math.floor(Math.random() * 6) + 1;
let genera = confirm('Benvenuto, confermare per generare un numero');

if(puntata >= 1 && puntata <= 6){

    if(puntataComputer < puntata){
        alert('Complimenti! Hai vinto!' + 'Scelta giocatore: ' + puntata + ' Scelta computer: ' + puntata );
    }else if (puntataComputer == puntata){
        alert('Pareggio! ' + 'Scelta giocatore: ' + puntata + ' Scelta computer: ' + puntata );     
    }else{
        alert('Peccato! Ha vinto il computer! ' + 'Scelta giocatore: ' + puntata + ' Scelta computer: ' + puntata );
    }
}else{
    alert('Valore inserito non valido!');
}




//CORREZIONE PROF

/*
const puntata = Math.floor(Math.random() * 6) + 1;
alert('Il numero generato per il giocatore è: ' + puntata);

const puntataPc = Math.floor(Math.random() * 6) + 1;
alert('Il numero generato per il computer è: ' + puntataPc);

if (puntataPc > puntata){
    alert('Vince il computer con ' + puntataPc);
}else if (puntata > puntataPc){
    alert('Vince il giocatore con ' + puntata);
}else{
    alert('Pareggio');
}

*/
