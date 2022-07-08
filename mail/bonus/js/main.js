//Creo un Array con le diverse email.
//Attraverso l'HTML dovrò richiedere l'email
//Se l'email inserita esiste, allora darò un esito positivo
//Altrimenti darò esito negativo


const mail = ['erik@gmail.it', 'mike@gmail.it', 'max@gmail.it'];

const userMail = document.getElementById('usermail');

let enter = document.getElementById('enter');

let answerEnter = document.getElementById('answerEnter');



enter.addEventListener('click', 
    function() {
        for (let i = 0; i < mail.length; i++){
            if(i != mail || i > mail){
                answerEnter.innerHTML = 'Accesso Negato';
            }

            if (i == mail){
                answerEnter.innerHTML = 'Accesso Riuscito';
            }
        }
    }
);



