function knapp() {
    let lengde, bredde, areal;
    lengde= prompt("Skriv inn lengden i CM og trykk <Enter>:");
    bredde= prompt("Skriv inn bredden i CM og trykk <Enter>:");
    areal= lengde * bredde;

    document.getElementById("demo2").innerHTML = areal;
}