function sjekkAlder() {
    let dinAlder = document.getElementById("alder").value;

    if (dinAlder < 13) {
        document.getElementById("output").innerHTML = `Du er en unge.`;
    }
    else if (dinAlder >= 13 && dinAlder <= 19) {
        document.getElementById("output").innerHTML = `Du er en tenåring.`;
    }

    else if (dinAlder >= 20 && dinAlder < 66) {
        document.getElementById("output").innerHTML = `Du er voksen.`;
    }

    else {
        document.getElementById("output").innerHTML = `Du er pensjonist`;
    }
    
}

function finnStortTall() {
    let tallNummerEn = document.getElementById("tall1").value;
    let tallNummerTo = document.getElementById("tall2").value;

    if (tallNummerEn > tallNummerTo) {
        document.getElementById("output2").innerHTML = `Tall nummer 1 er størst`;
    }
    else {
        document.getElementById("output2").innerHTML = `Tall nummer 2 er størst.`;
    }
}

function regnAreal() {
    let lengde = document.getElementById("lengde1").value;
    let bredde = document.getElementById("bredde1").value;
    let areal = lengde * bredde;
    document.getElementById("output3").innerHTML = `Arealet av rektangelen er ${areal} kvadratcentimeter`;
}

function lagInitialer() {
    let fornavn = document.getElementById("fnavn").value;
    let fNavnInit = fornavn.slice(0,1);
    let mellomnavn = document.getElementById("mnavn").value;
    let mNavnInit = mellomnavn.slice(0,1);
    let etternavn = document.getElementById("enavn").value;

    document.getElementById("output7").innerHTML = `Ditt navn er ${fNavnInit}. ${mNavnInit}. ${etternavn}`;
}

function konverterDollar() {
    let dinDollar = document.getElementById("dollarInput").value;
    let dollarTilnok = dinDollar * 10;
    let moms = dollarTilnok * 25 / 100;
    let frakt = 249;
    let inklMoms = dollarTilnok + moms;
    let resultat = frakt + inklMoms;
    

    document.getElementById("output8").innerHTML = `Din totalsum inklusiv frakt og mva er ${resultat} NOK `;
}