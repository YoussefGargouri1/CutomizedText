document.addEventListener("DOMContentLoaded" , function(){

    let color = document.querySelector("#color");
    let police =document.querySelector("#police");
    let taille = document.querySelector("#taille");
    let text = document.querySelector("#text");
    
    
    function applyintotext(){
        text.textContent = text.value;
        text.style.color = color.value;
        text.style.fontSize = taille.value ? `${taille.value}px` : "16px";
        text.style.fontFamily = police.value; 
    }

    color.addEventListener( "input" , applyintotext);
    taille.addEventListener( "input" , applyintotext);
    police.addEventListener( "change" , applyintotext);
    text.addEventListener( "input" , applyintotext);

})