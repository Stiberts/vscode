function sjekkTippetegn(){
    let tippetegn = parseInt(document.getElementById("hub").value)  ;
    let resultat = document.getElementById("resultat");

    let dittResultat = "";

    switch (tippetegn) {
        case 1: dittResultat = "Du valgte 'H' ";
        break;
        case 2: dittResultat = "Du valgte 'U' ";
        break;
        case 3: dittResultat = "Du valgte 'B' ";
    }

}