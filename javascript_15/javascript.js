// Oppgave 1.a //

function randomTall() {
    let heltall = [];
    
    for(let i = 0; i < 15; i++) {
        let heltallListe = Math.floor(Math.random() * 101);
        
        heltall.push(heltallListe);
    }
    return heltall;
}

function visRandomTall() {
    let randomHeltall = randomTall();
    let utskrift = "";

    randomHeltall.forEach(function(element) {
        utskrift += element + "<p>";
        //utskrift += "<p>"
    
});

    document.getElementById("utskrift").innerHTML = utskrift;

}