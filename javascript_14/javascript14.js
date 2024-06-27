// Oppgave 1.a //

function highestValue() {
    let utskrift = "";
    let arr = [1, 2.3, -4, 5.7, -7.2, 13, 59];
    let maxVerdi = arr[0];

    for(let x of arr) {
        if(x > maxVerdi) {
            maxVerdi = x;
        }    
    }
    utskrift = "Den høyeste verdien av listen er: " + maxVerdi;
    document.getElementById("utskrift").innerHTML = utskrift;
}

// Oppgave 1.b,c //

function sortList() {
    let arr = [1, 2.3, -4, 5.7, -7.2, 13, 59];
    let arr2 = [1, 2.3, -4, 5.7, -7.2, 13, 59];

    arrStigende = arr.sort(function(a,b) {return a-b});
    arrSynkende = arr2.sort(function (a,b) {return b-a});
    document.getElementById("utskrift1").innerHTML = `Stigende rekkefølge: ` + arrStigende + `<br>` + `Synkende rekkefølge: ` + arrSynkende;
   
}

// Oppgave 1.d,e //
// Legg til et tall i en ny liste //

function addNumber() {
    let arr = [1, 2.3, -4, 5.7, -7.2, 13, 59];
    let arrNew = arr.slice();
    arrNew.push(92);
    
    document.getElementById("utskrift2").innerHTML = `Her er den oppdatertet listen: ` + arrNew;

} 

// Oppgave 1.f,g  //
// Fjerner det første tallet i listen //
// Sjekker om det er et array //

function removeNumber() {
    let arr = [1, 2.3, -4, 5.7, -7.2, 13, 59];
    let arrNew = arr.slice(1);
    
    document.getElementById("utskrift3").innerHTML = `Ny liste uten det første tallet ` + arrNew + `<br>` + `Sjekker om det er et array: ` + (Array.isArray(arrNew));

} 