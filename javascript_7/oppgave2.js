function sjekkTippetegn(){
    let tippetegn = document.getElementById("hub").value;
   
    switch (tippetegn) {    
        case "H": document.getElementById("resultat").innerHTML = "Du valgte 'H' ";
        case "h": document.getElementById("resultat").innerHTML = "Du valgte 'H' ";
        break;
        case "U": document.getElementById("resultat").innerHTML = "Du valgte 'U' ";
        case "u": document.getElementById("resultat").innerHTML = "Du valgte 'U' ";
        break;
        case "B": document.getElementById("resultat").innerHTML = "Du valgte 'B' ";
        case "b": document.getElementById("resultat").innerHTML = "Du valgte 'B' ";
        break;
        default: document.getElementById("resultat").innerHTML = `${tippetegn} er ikke gyldig. Vennligst skriv inn
                                                                et gyldig tippetegn.` ;
    }
    

}