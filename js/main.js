

// Exercice 1

let ageSaisi;
let genreSaisi;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function verifierImposition(){
    //recuperer la valeur des inputs
    ageSaisi = document.getElementById('age-saisi').value;
    genreSaisi = document.getElementById('genre-saisi').value;

    //condition
if(genreSaisi =="H" && ageSaisi >= 18){
    message.innerHTML = '<div class="alert alert-danger" role="alert"> Vous etes imposable !</div>';
}else if(genreSaisi ==="F" && (ageSaisi >= 18 && ageSaisi <= 35)){
    message.innerHTML = '<div class="alert alert-danger" role="alert"> Vous etes imposable !</div>';
}else{
    message.innerHTML = '<div class="alert alert-success" role="alert"> Vous etes non imposable !</div>';
}

}
    //appel de la function
bouton.addEventListener('click',verifierImposition,false)



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
   message.innerHTML = `Le prix total est de: ${prixTotal} euros. `;
}
   
 //appel de la function
bouton2.addEventListener('click',effectuerCalcul,false);

