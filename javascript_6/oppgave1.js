let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let navn = document.getElementById("navn").value;
let kjonn = document.getElementById("binary").value;
let alder = document.getElementById("alder").value;
let hundreAar = 100 - alder;

btn.addEventListener(`click`, function(){
    output.innerHTML = `Det var en gang en ${kjonn} med navn ${navn}. Denne personen er nå ${alder} 
                        år gammel og har ${hundreAar} år igjen til fylte 100 år!`;
    

})