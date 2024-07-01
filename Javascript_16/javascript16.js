// Oppgave 1. Local.Storage //

function oppstart(){

let utskrift = document.getElementById("utskrift");

//function savetoStorage() {
    let fnavn = document.getElementById("fornavn").value;
    let enavn = document.getElementById("etternavn").value;

    localStorage.setItem("fornavn", fnavn);
    localStorage.setItem("etternavn", enavn)

}

function getfromStorage() {
    let fnavn = localStorage.getItem("fornavn");
    let enavn = localStorage.getItem("etternavn");
    if (fnavn == "") {
        fnavn = "Ikke registrert";
    }

    if (enavn == "") {
        enavn = "Ikke registrert";
    }

    utskrift.innerHTML = `${fnavn} ${enavn}`;
}


window.onload = oppstart();

// Oppgave 2. Local.Storage - Bakgrunnsfarge //

function settBakgrunnsFarge() {
    let select = document.getElementById("velgfarger");
    let valgtFarge = select.value;
    document.body.style.backgroundColor = valgtFarge;
}

// Oppgave 3 a. Les tekstfil med fetch()metoden //

function lesTekstFil() {
    let utskrift = document.getElementById("utskrift2");

    fetch('Daglige_steg.txt')
        .then((res) => res.text())
        .then((data) => {
            let linjer = data.split('\n');
            let dag = 1;

            utskrift.innerHTML += `Her er innholdet i tekstfilen (Ikke si noe til Skattefuten...) <br>`;

            linjer.forEach((linje) => {
                utskrift.innerHTML += `<ul><li>${dag} januar: ${linje} kr;-</li></ul>`;
                dag++;
            });
        })
            .catch((error) => console.error('Error: ', error));
    }

// Oppgave 3. b Beregn totalsum og gjennomsnitt per dag av tekstinnholdet //

function beregnTotal() {
    let utskrift = document.getElementById("utskrift3");

    fetch('Daglige_steg.txt')
        .then((res) => res.text())
        .then((data) => {
            let linjer = data.split();
            let sum = 0;

            linjer.forEach((linje) => {
                let tall = parseFloat(linje.trim());
                if (!isNaN(tall)) {
                    totalsum += tall;
                }
            });
            utskrift.innerHTML += `Totalsummen er: ${totalsum}`;
        })
        .catch((error) => console.error('Error: ', error ));
}




