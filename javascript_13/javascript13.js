//Oppgave 1. Array med samling av Javascript Objekter. //

function petInfo() {
    let utskrift = "";
    let mineDyr = [{
        navn: "Blackie",
        dyreart: "katt",
        rase: "Blandingskatt",
        fodselAar: 1990,
        forelder: "Mr. Whiskerson",
    
    },{ 
        navn: "Pusi",
        dyreart: "att",
        rase: "Norsk Skogskatt",
        fodselAar: 1992,
        forelder: "Sir Meows-alot",
    },{
        navn: "Beauty",
        dyreart: "hund",
        rase: "Golden Retriever",
        fodselAar: 1994,
        forelder: "Pluto",
    },
    {
        navn: "Timmy",
        dyreart: "hund",
        rase: "Norsk Buhund",
        fodselAar: 1993,
        forelder: "Tommy",
        },
    ];

    for (let i = 0; i < mineDyr.length; i++ ) {
        utskrift += `${mineDyr[i].navn} er en ${mineDyr[i].dyreart} og ble født i ${mineDyr[i].fodselAar} og er altså ${2024 - mineDyr[i].fodselAar} år gammel\n`;
    }

    document.getElementById("utskrift1").innerText = utskrift;
    
}

// Oppgave 2. Oversikt over Donald Duck & Co i et array //

function duckInfo() {
    let utskrift = "";

    let familienDuck = [{
        fornavn: "Donald",
        etternavn: "Duck",
        adresse: "Andebyveien 1",
        poststed: "Andeby",
        telefon: {mobil: 12345678, hjem: 11112222},
        epost: "donald@duck.co",
    },
     
    {
        fornavn: "Ole",
        etternavn: "Duck",
        adresse: "Andebyveien 1",
        poststed: "Andeby",
        telefon: {mobil: 12312345, hjem: 11112222},
        epost: "ole@duck.co",
    },
    {
        fornavn: "Dole",
        etternavn: "Duck",
        adresse: "Andebyveien 1",
        poststed: "Andeby",
        telefon: {mobil: 12362865, hjem: 11112222},
        epost: "dole@duck.co",
    },
    {
        fornavn: "Doffen",
        etternavn: "Duck",
        adresse: "Andebyveien 1",
        poststed: "Andeby",
        telefon: {mobil: 12782399, hjem: 11112222},
        epost: "doffen@duck.co",
    },
    ];
    for(let i = 0; i < familienDuck.length; i++) {
        utskrift += `<p> Navn: ${familienDuck[i].fornavn} ${familienDuck[i].etternavn}</p>`;
        utskrift += `<p> Adresse: ${familienDuck[i].adresse}</p>`;
        utskrift += `<p> Poststed: ${familienDuck[i].poststed}</p>`;
        utskrift += `<p> Telefon: Mobil: ${familienDuck[i].telefon.mobil} Hjem: ${familienDuck[i].telefon.hjem}</p>`;
        utskrift += `<hr>`;
    }
    document.getElementById("utskrift2").innerHTML = utskrift;
}

