function forLokke() {
    let tall;
    let innhold = "";
    for (tall = 1; tall <= 7; tall++) {
        innhold += "Jeg er tall nummer " + tall + "<br>";
    }

    document.getElementById("output").innerHTML = innhold;
}