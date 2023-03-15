let ageSaisi;
let genreSaisi;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function verifierImposition(){
    ageSaisi = document.getElementById('age-saisi').value;
    genreSaisi = document.getElementById('genre-saisi').value;

if(genreSaisi =="H" && ageSaisi >= 18){
    alert("Vous etes imposable");
}else if(genreSaisi ==="F" && (ageSaisi >= 18 && ageSaisi <= 35)){
    alert("Vous etes imposable");
}else{
    alert("Vous etes non imposable");
}

}
bouton.addEventListener('click',verifierImposition, false)



