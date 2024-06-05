const pepperoniBtn = document.getElementById("pepperoniBtn");
const beefBtn = document.getElementById("beefBtn");
const storBtn = document.getElementById("storBtn");
const mediumBtn = document.getElementById("mediumBtn");
const mySubmit = document.getElementById("mySubmit");
const pizzaResult = document.getElementById("pizzaResult");
const sizeResult = document.getElementById("sizeResult");

mySubmit.onclick = function(){

    if(pepperoniBtn.checked){
        pizzaResult.textContent = `Du har valgt Pepperonipizza.`;
    }
    else {
        pizzaResult.textContent = `Du har valgt Biffpizza.`;
    }

    if(storBtn.checked){
        sizeResult.textContent = `Du har valgt Stor størrelse.`;
    }
    else{
        sizeResult.textContent = `Du har valgt Medium størrelse.`;
    }
}