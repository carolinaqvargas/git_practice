// Exercice 1
    //declarer les variables
let ageSaisie;
let genreSaisie;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function verifierImposition(){
    //recuperer la valeur des inputs
    ageSaisie = document.getElementById('age-saisie').value;
    genreSaisie = document.getElementById('genre-saisie').value;

    //condition
if(genreSaisie =="H" && ageSaisie > 20){
    message.innerHTML = '<div class="alert alert-danger" role="alert"> Vous etes imposable !</div>';
}else if(genreSaisie ==="F" && (ageSaisie >= 18 && ageSaisie <= 35)){
    message.innerHTML = '<div class="alert alert-danger" role="alert"> Vous etes imposable !</div>';
}else{
    message.innerHTML = '<div class="alert alert-success" role="alert"> Vous etes non imposable !</div>';
}

}
    //appel de la function

    if(document.getElementById('bouton'))
        {
         bouton.addEventListener('click',verifierImposition,false)
        }

// Exercice 2 

let nbrePhotocopie;
let prixTotal;
let bouton2 = document.getElementById('bouton2');
let message2 = document.getElementById('message2');

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");       //round repeating decimal 
}

function effectuerCalcul(){
nbrePhotocopie = document.getElementById('valeur-saisie').value;
if (nbrePhotocopie <= 10){
    prixTotal = roundToTwo(nbrePhotocopie*0.1);
}else if (nbrePhotocopie <= 30){
    prixTotal = roundToTwo((nbrePhotocopie-10) * 0.09 + 1);
}else{
    prixTotal = roundToTwo((nbrePhotocopie-30) * 0.08 + 2.8);
}

   message2.innerHTML = `Le prix total est de: ${prixTotal} euros. `;
}
   
 //appel de la function
if(document.getElementById('bouton2'))
{
 bouton2.addEventListener('click',effectuerCalcul,false)
}


// Exercice 3
    //declarer les variables
let heureSaisie;
let minuteSaisie;
let secondeSaisie;
let btnHeure = document.getElementById('btnHeure');
let affichageHeure = document.getElementById('affichageHeure');

function calculerHeure(){
    //recuperer la valeur des inputs, la fonction parseInt() converti un string (chaîne de caractère) en int (entier).
    heureSaisie = parseInt(document.getElementById('heure-saisie').value) ;
    minuteSaisie = parseInt(document.getElementById('minute-saisie').value) ;
    secondeSaisie = parseInt(document.getElementById('seconde-saisie').value);

    //condition
    if (heureSaisie === 23 && minuteSaisie === 59 && secondeSaisie === 59){
        heureSaisie === 0;
        minuteSaisie === 0;
        secondeSaisie === 0;
         } else if (minuteSaisie === 59 && secondeSaisie === 59){
         heureSaisie === heureSaisie++;
         minuteSaisie === 0;
         secondeSaisie === 0;
            } else if (secondeSaisie === 59){
         minuteSaisie === minuteSaisie++;
         secondeSaisie === 0;
          } else {
         secondeSaisie === secondeSaisie++;
         };
      
         affichageHeure.innerHTML = `${heureSaisie}h ${minuteSaisie}min ${secondeSaisie}sec`;
}
    //appel de la function

    if(document.getElementById('btnHeure'))
        {
         btnHeure.addEventListener('click',calculerHeure,false)
        }


// Exercice 4

    //declarer les variables
    let montApayer;
    let montPaye;
    let aRendre;
    let nbre10euros;
    let nbre5euros;
    let nbre1euros;
    let btnMonnaie = document.getElementById('btnMonnaie');
    let rendre1 = document.getElementById('rendre1');
    let rendre5 = document.getElementById('rendre5');
    let rendre10 = document.getElementById('rendre10');
    
    function calculerMonnaie(){
        //recuperer la valeur des inputs, la fonction parseInt() converti un string (chaîne de caractère) en int (entier).
        montApayer = parseInt(document.getElementById('montApayer').value) ;
        montPaye = parseInt(document.getElementById('montPaye').value) ;
        
        aRendre = montPaye - montApayer;

        nbre10euros = 0;
        while(aRendre >= 10){
            nbre10euros = nbre10euros + 1; 
            aRendre = aRendre - 10;
        }
        
        nbre5euros = 0;
        while(aRendre >= 5){
            nbre5euros = nbre5euros + 1; 
            aRendre = aRendre - 5;
        }

        rendre1.innerHTML = `${aRendre}`;
        rendre5.innerHTML = `${nbre5euros}`;
        rendre10.innerHTML = `${nbre10euros}`;
    }
        //appel de la function
    
        if(document.getElementById('btnMonnaie'))
            {
             btnMonnaie.addEventListener('click',calculerMonnaie,false)
            }
    
// Exercice 5

let emailSaisie;

let btnEmail = document.getElementById('btnEmail');
let messageEmail = document.getElementById('messageEmail');

// callback function 
function checkIfEmailInString(text) { 
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
}

function validerEmail(){
emailSaisie = document.getElementById('emailSaisie').value;

if(checkIfEmailInString(emailSaisie)){
    messageEmail.innerHTML = '<div class="alert alert-success" role="alert">Adresse email valide!</div>';
}else {
    messageEmail.innerHTML = '<div class="alert alert-danger" role="alert">Adresse email invalide!</div>';
}
}

//appel de la function
if(document.getElementById('btnEmail'))
{
btnEmail.addEventListener('click',validerEmail,false)
}



// Exercice 6
    //declarer les variables
    let age;
    let dureePermis;
    let dureeAssurance;
    let nbrAccidents;
    let btnAssurance = document.getElementById('btnAssurance');
    let affichageTarif = document.getElementById('affichageTarif');
    let pointsMalus;

function calculerTarif(){
    nbrAccidents = parseInt(document.getElementById('nbrAccidents').value);
    age = parseInt(document.getElementById('age').value) ;
    dureePermis = parseInt(document.getElementById('dureePermis').value) ;
    dureeAssurance = parseInt(document.getElementById('dureeAssurance').value);

    if (nbrAccidents >=3){
        affichageTarif.innerHTML = `<div class="alert alert-dark" role="alert">Refuse</div>`;
    }else{
        pointsMalus = 0;
                if (age > 25) {
                pointsMalus = ++pointsMalus;
                } 
                if (dureePermis > 2) {
                pointsMalus = ++pointsMalus;
                } 
                
                if (dureeAssurance > 1) {
                pointsMalus = ++pointsMalus;
                } 
                if (nbrAccidents === 1){
                pointsMalus = --pointsMalus;
                }
                if (nbrAccidents == 2){
                pointsMalus = --pointsMalus;
                }
                                         
                             
            switch (pointsMalus) {
                case 3:
                affichageTarif.innerHTML = `<div class="alert alert-primary" role="alert">Tarif Bleu</div>`;
                break;
    
                case 2:
                affichageTarif.innerHTML = `<div class="alert alert-success" role="alert">Tarif Vert</div>`;
                break;
    
                case 1:
                affichageTarif.innerHTML = `<div class="alert alert-warning" role="alert">Tarif Orange</div>`;
                break;
    
                case 0:
                affichageTarif.innerHTML = `<div class="alert alert-danger" role="alert">Tarif Rouge</div>`;
                break;
    
                case -1:
                affichageTarif.innerHTML = `<div class="alert alert-dark" role="alert">Refuse</div>`;
                break;

                case -2:
                affichageTarif.innerHTML = `<div class="alert alert-dark" role="alert">Refuse</div>`;
                break;
            } 
       
    }

}
    
    //appel de la function
    
    if(document.getElementById('btnAssurance')){
    btnAssurance.addEventListener('click',calculerTarif,false)
    }
    
    