
let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

const minTall = 0;
const maxTall = 100;
const svar = Math.floor(Math.random() * (maxTall - minTall + 1));

let attempts = 0;
let guess;
let running = true;

btn.addEventListener('click',function(){
while(running){

    //guess = window.prompt(`Gjett på et tall mellom ${minTall} og ${maxTall}`);
    let guess = document.getElementById("userInput").value;
    guess = Number(guess);

    if(isNaN(guess)){
        //window.alert("Vennligst skriv inn et gyldig tall");
        output.innerHTML = `Vennligst skriv et gyldig tall`;
    }
    else if(guess < minTall || guess > maxTall){
        //window.alert("Vennligst skriv inn et gyldig tall");
        output.innerHTML = `Vennligst skriv inn et gyldig tall`;
        
    }
    else{
        attempts++;
        if(guess < svar){
            //window.alert("For lavt, prøv igjen!");
            output.innerHTML = `For lavt, prøv igjen!`;
            
        }
        else if(guess > svar){
            //window.alert("For høyt, prøv igjen!");
            output.innerHTML = `For høyt, prøv igjen!`;
            
        }
        else{
            //window.alert(`Riktig! Tallet var ${svar}. Det tok deg ${attempts} forsøk!`);
            output.innerHTML = `Riktig! Tallet var ${svar}. Det tok deg ${attempts} forsøk!`;
            running = false;
        }
    }
}

})