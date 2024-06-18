//OPPGAVE 1.a //
function printArray() {
    
    let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
    let utskrift = document.getElementById("utskrift");
    let svar = "";

    for (let i = 0; i < tall.length; i++) {
        svar += tall[i];
    }
    utskrift.innerHTML = svar;
    
}

//OPPGAVE 1.b //

function printArray2() {
    
    let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
    let utskrift = document.getElementById("utskrift2");
    let svar = "";

    for (let i = tall.length -1; i >= 0; i --) {
        svar += tall[i];
    }
    utskrift.innerHTML = svar;
    
}

//OPPGAVE 1.c //

function printArray3() {
    
    let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
    let utskrift = document.getElementById("utskrift3");
    let svar = "";

    for (let i = 0; i < tall.length; i += 2) {
        svar += tall[i];
    }
    utskrift.innerHTML = svar;
    
}

//OPPGAVE 1.d //
function printArray4() {
    
    let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
    let utskrift = document.getElementById("utskrift4");
    let svar = "";

    for (let i = 0; i < tall.length; i++) {
        if (tall[i] < 10) {

        svar += tall[i];
    }
    }        
    utskrift.innerHTML = svar;
}

//OPPGAVE 1.e //
function printArray5() {
    
    let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
    let utskrift = document.getElementById("utskrift5");
    let svar = "";

    for (let i = 0; i < tall.length; i++) {
        if (tall[i] % 2 === 0) {

        svar += tall[i];
    }
    }        
    utskrift.innerHTML = svar;
}

//OPPGAVE 1.f //
function printArray6() {
    
    let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
    let utskrift = document.getElementById("utskrift6");
    let sum = 0;
    let svar = "";

    for (let i = 0; i < tall.length; i++) {


        sum += tall[i];
    
    }        
    utskrift.innerHTML = sum;
}
