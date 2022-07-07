//Creo un contatore random che va da 1 a 6
//Creo delle constanti per specificare i dati che voglio siano inseriti
//Se il numero scelto è superiore al numero scelto dal computer, ho vinto
//Altrimenti vince il computer

const puntata = parseInt(prompt('Inserisci un numero da 1 a 6'));

if(puntata >= 1 && puntata <= 6){

    const puntataComputer = Math.floor(Math.random() * 6) + 1;

    if(puntataComputer < puntata){
        alert('Complimenti! Hai vinto!' + 'Scelta computer: ' + puntataComputer);
    }else if (puntataComputer == puntata){
        alert('Pareggio! ' + 'Scelta computer: ' + puntataComputer);      
    }else{
        alert('Peccato! Ha vinto il computer! ' + 'Scelta computer: ' + puntataComputer);
    }
}else{
    alert('Valore inserito non valido!');
}