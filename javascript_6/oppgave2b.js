let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random() * 100);

btn.addEventListener('click', function(){
    let input = document.getElementById("userInput").value;
    if(input == number){
        output.innerHTML = `Du gjettet riktig, nummer ditt er ${number}`;
    }
    else if(input < number){
        output.innerHTML = `Du gjettet for lavt tall, prøv igjen!`;
    }
    if(input > number){
        output.innerHTML = `Du gjettet for høyt tall, prøv igjen!`;
    }
})