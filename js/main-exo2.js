// Exercice 2 

let nbrePhotocopie;
let prixTotal;
let bouton2 = document.getElementById('bouton2');
let message2 = document.getElementById('message2');

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");       //arondi les décimales périodiques
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
    message2.innerHTML = `<div class="alert alert-success" role="alert">Le prix total este: ${prixTotal} euros.</div>`;
}
   
 //appel de la function
bouton2.addEventListener('click',effectuerCalcul,false);

