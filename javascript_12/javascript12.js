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

//OPPGAVE 1.e  Skriver ut alle partallene //
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

//Assosiative Arrays//

function assArray() {

let utskrift = document.getElementById("utskrift7");
let person = {fornavn: "Stian", etternavn: "Berthelsen"};
let navn = person["fornavn"];
let navn2 = person.etternavn;

utskrift.innerHTML = navn + navn2;

}

//Oppgave 2. a Finn summen av tallene//

function sumArray() {
    
    let tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12];
    let utskrift = document.getElementById("utskrift8");
    let sum = 0;

    for (let i = 0; i < tall.length; i++) {
        
        sum += tall[i];
        
    }

    utskrift.innerHTML = `Summen av alle tallene er: ` + sum;
    
}

//Oppgave 2. b Finn de negative tallene//

function printArray9() {
    
    let tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12];
    let utskrift = document.getElementById("utskrift9");
    let svar = "";

    for (let i = 0; i < tall.length; i++) {
        if (tall[i] < 0 ) {

            svar += tall[i];
        }
    }

    utskrift.innerHTML = `Her er de negative tallene: ` + svar;
    
}

// Oppgave 2. c (Regn ut gjennomsnitt av arrayet med forEach() metoden //

function regnGjennomsnitt () {
    let tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12];
    let utskrift = document.getElementById("utskrift10");

    let sum = 0;
    tall.forEach(function(num) {sum += num });
    let gjennomsnitt = sum / tall.length;

    utskrift.innerHTML = `Gjennomsnittet av listen er: ` + gjennomsnitt;
}

// Oppgave 2. d (Regn ut gjennomsnitt av arrayet med reduce() metoden //

function regnGjennomsnitt2 () {
    let tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12];
    let utskrift = document.getElementById("utskrift11");

    let gjennomsnitt = tall.reduce((a,b) => a + b, 0) / tall.length;

    utskrift.innerHTML = `Gjennomsnittet av listen er rundet ned til hele tallet: ` + (Math.round(gjennomsnitt));
}

// Oppgave 2. e Finn det minste tallet. Bruker reduce() metoden, og her finner jeg det minste tallet ved å
// sammenligne verdien av "accumelator" og "currentValue" Hvis verdien av "accumelator" er mindre enn "currentValue"
// så returnerer jeg "accumelator". Ellers blir "currentValue" returnert. //

function minsteTall() {
    let tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12];
    let utskrift = document.getElementById("utskrift12");

    let minsteTall = tall.reduce((accumelator, currentValue) => {
        return accumelator < currentValue ? accumelator : currentValue;
    }) 

    utskrift.innerHTML = `Det minste tallet i listen som består av tallene [${tall}] er: ` + minsteTall;
}

// Oppgave 2. e Finn summen av partallene. Bruker en for-loop for å finne partallene og legger de sammen i 
//en variabel som jeg kaller sum. //
function sumPartall() {
    let tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12];
    let utskrift = document.getElementById("utskrift13");
    let sum = 0;

    for (let i= 0; i < tall.length; i++) {
        if (tall[i] % 2 === 0) {
            sum += tall[i];
        }
    }

    utskrift.innerHTML = `Summen av partallene i listen er: ` + sum;
}

// Oppgave 3. a //

function finnLikeTall() {
    let tall = [4,5,2,3,4,6,1,2,0,9,7,6,8,5,6,4,2,3,4,7,3];
    let utskrift = document.getElementById("utskrift14");
    let antall = {};

    for (let ele of tall) {
        if (antall[ele]) {
            antall[ele] += 1;
        } else {
            antall[ele] = 1;
        }
    }
    
    utskrift.innerHTML = antall;
}   

// Oppgave 4. //

function checkMonth() {
    let daysInMonths = [31,28,30,31,30,31,30,31,30,31,30,31];
    let monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "July", "August", "September", "Oktober", "November", "Desember"];
    let month = Number(document.getElementById("inputBox").value);

    if (month < 1 || month > 12) {
        document.getElementById("utskrift15").innerText = `Skriv inn et tall mellom 1 - 12`;
        document.getElementById("inputBox").value = "";
        return;
    }
    document.getElementById("utskrift15").innerText = `Det er ${daysInMonths[month-1]} dager i ${monthNames[month-1]}`;
    
}
