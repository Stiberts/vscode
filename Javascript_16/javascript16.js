// Oppgave 1. Local.Storage //


let utskrift = document.getElementById("utskrift");

function savetoStorage() {
    let fnavn = document.getElementById("fornavn").value;
    let enavn = document.getElementById("etternavn").value;

    localStorage.setItem("fornavn", fnavn);
    localStorage.setItem("etternavn", enavn)

}

function getfromStorage() {
    let fnavn = localStorage.getItem("fornavn");
    let enavn = localStorage.getItem("etternavn");
    if (fnavn === null) {
        fnavn = "Ikke registrert";
    }

    if (enavn === null) {
        enavn = "Ikke registrert";
    }

    utskrift.innerHTML = `${fnavn} ${enavn}`;
}

// Oppgave 2. Local.Storage - Bakgrunnsfarge //




