function finnLengde() {
    let txt = document.getElementById("textboks").value;
    let lengde = txt.length;

    document.getElementById("utskrift").innerHTML = lengde;

}

function storeBokstaver() {
    let txt = document.getElementById("textboks").value;
    let caps = txt.toUpperCase();

    document.getElementById("utskrift2").innerHTML = caps;
}

function smaaBokstaver() {
    let txt = document.getElementById("textboks").value;
    let small = txt.toLowerCase();

    document.getElementById("utskrift3").innerHTML = small;
}