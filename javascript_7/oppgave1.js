function sjekkTippetegn(){
    let tippetegn = document.getElementById("hub").value;

    if (tippetegn == 'H') {
        document.getElementById("resultat").innerHTML = "Du valgte 'H' for hjemmerseier";
    }
    else if (tippetegn == 'U') {
        document.getElementById("resultat").innerHTML = "Du valgte 'U' for uavgjort"; 
    }
    else if (tippetegn == 'B') {
        document.getElementById("resultat").innerHTML = "Du valgte 'B' for borteseier";
    }
    else {
        document.getElementById("resultat").innerHTML = "Skriv inn et riktig tippetegn";
    }

}