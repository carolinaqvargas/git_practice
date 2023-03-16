// Exercice 1

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

function effectuerCalcul(){
nbrePhotocopie = document.getElementById('valeur-saisie').value;
if (nbrePhotocopie <= 10){
    prixTotal = nbrePhotocopie*0.1;
}else if (nbrePhotocopie <= 30){
    prixTotal = (nbrePhotocopie-10) * 0.09 + 1;
}else{
    prixTotal = (nbrePhotocopie-30) * 0.08 + 2.8;
}

   message2.innerHTML = `Le prix total est de: ${prixTotal} euros. `;
}
   
 //appel de la function
bouton2.addEventListener('click',effectuerCalcul,false);

