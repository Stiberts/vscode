let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
let rettTall = 69;

//let number = Math.floor(Math.random() * 100);

btn.addEventListener('click', function(){
    let input = document.getElementById("userInput").value;
    if(input == rettTall){
        output.innerHTML = `Du gjettet riktig! Tallet ditt er ${rettTall}.`;
    }
    else if(input < rettTall){
        output.innerHTML = `Du gjettet for lavt tall, prøv igjen!`;
    }
    if(input > rettTall){
        output.innerHTML = `Du gjettet for høyt tall, prøv igjen!`;
    }
})