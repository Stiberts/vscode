function klikkMeg() {
    let getInput = document.getElementById("navn").value;

    if (getInput == "") {
        document.getElementById("melding").innerHTML = `Vennligst skriv inn navnet ditt`;
    }
    
    else {
        document.getElementById("melding").innerHTML = `Navnet ditt er ${getInput}`;
    }
}