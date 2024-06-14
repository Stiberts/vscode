//Oppgave 1//

function finnPartall() {
    let utskrift = document.getElementById("output1");

    for (let tall=0; tall<=100; tall++) {
        if (tall === 0) {
            utskrift.innerHTML += tall + " er et partall" + "<br>";
                
        }
        else if (tall % 2 === 0) {
            utskrift.innerHTML += tall + " er et partall" + "<br>";
            
        }
        else {
            
        }
}
}

//Oppgave 2//

function finnOddetall() {
    let utskrift = document.getElementById("output2");

    for (let tall=0; tall<=100; tall++) {
        if (tall === 0) {
            
        }
        else if (tall % 2 === 0) {
            
        }
        else {
            utskrift.innerHTML += tall + " er et oddetall" + "<br>";
            
        }
}
}

//Oppgave 3//

function deleligTall() {
    let utskrift = document.getElementById("output3");

    for (let tall=0; tall<=100; tall++) {
        if (tall % 5 == 0) {
            utskrift.innerHTML += tall + " er delelig på 5" + "<br>";
            
        }
        else {
            utskrift.innerHTML += tall + " er ikke delelig på 5" + "<br>";
            
        }
}
}

//Oppgave 4//

function deleParTall() {
    let utskrift = document.getElementById("output4");

    for (let tall=0; tall<=100; tall++) {
        if (tall === 0) {
        }
        else if (tall % 5 ==0){
            utskrift.innerHTML += tall + " er et partall og delelig på 5" + "<br>"; 
        }
        else {
           
            
        }
}
}

//Oppgave 5//

function deleToTall() {
    let utskrift = document.getElementById("output5");

    for (let tall=0; tall<=100; tall++) {
        if (tall % 3 == 0 && tall % 8 == 0) {
            utskrift.innerHTML += tall + " er delelig med 8 og 3"

        }
        else {
           
        }
}
}

//Oppgave 6//

function antallLinjer() {
    let navnInput = document.getElementById("navn").value;
    let nummerInput = parseInt(document.getElementById("nummer").value);
    let gjentaInput = '';
   

    for (let tall = 0; tall < nummerInput; tall++) {    
        gjentaInput += navnInput + '-';
        
    }
        
    document.getElementById("output6").innerText = gjentaInput;

}

//Oppgave 7//

function regnUt() {
    let output = ' ';

    for (let tall = 0; tall <= 100; tall++) {
        let resultat = tall * tall;
        output += `${tall} x ${tall} = ${resultat} <br>`;
    }

    document.getElementById("output6").innerHTML = output;

}

//Oppgave 8//

function whileLoop2() {
    let utskrift = document.getElementById("output8");

    let svar = 7;
    let i = 1;

    while (i > 0) {
        svar = svar - i;
        i--;
    }

    utskrift.innerHTML = `Jeg er tall nr: ` + svar;
}

//Oppgave 9//

function whileLoop() {
    let utskrift = document.getElementById("output9");

    let svar = 7;
    let i = 1;

    while (i > 0) {
        svar = svar - i;
        i--;
    }

    utskrift.innerHTML = `Jeg er tall nr: ` + svar;
}