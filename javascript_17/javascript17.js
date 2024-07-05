// Oppgave 1 a. Hent og vis landinfo fra Json-fil //

function landInfo() {
    let utskrift = document.getElementById("utskrift");

    fetch('land.json')
        .then((res) => res.json())
        .then((data) => {
            
            data.forEach((nasjon) => utskrift.innerHTML += `
                <ul>
                    <img src="${nasjon.flagg}" alt="Flagg av ${nasjon.land}" width="100">
                    <li><h4>Land: ${nasjon.land}</li></h4>
                    <li><h4>Hovedstad: ${nasjon.hovedstad}</li></h4>
                    <li><h4>Innbyggere: ${nasjon.innbyggere}</li></h4>
                    <hr>
            `)
        })
        .finally(() => utskrift.innerHTML += `Takk for idag, ha en trivelig dag.`);
}

// Oppgave 1 B. Samme funksjon men med Async og Await //

async function landInfo2() {
    let utskrift = document.getElementById("utskrift2");

    try {
        let res = await fetch('land.json');
        let data = await res.json();

        data.forEach((nasjon) => {
            utskrift.innerHTML += `
                <ul>
                    <img src="${nasjon.flagg}" alt="Flagg av ${nasjon.land}" width="100">
                    <li><h4>Land: ${nasjon.land}</li></h4>
                    <li><h4>Hovedstad: ${nasjon.hovedstad}</li></h4>
                    <li><h4>Innbyggere: ${nasjon.innbyggere}</li></h4>
                    <hr>
                </ul>
            `;
        });
    } catch (error) {
        
        console.error('Feil ved henting av data:', error);
    }

    finally {
        utskrift.innerHTML += `Takk for idag, ha en fisefin dag.`;
    }

        
}

// Oppgave 2 a. Json-fil fra API //

function hentAPI() {
    let utskrift = document.getElementById("utskrift3");
    let url = "https://jsonplaceholder.typicode.com/comments/";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            
            data.forEach((innhold) => utskrift.innerHTML += `
                <ul>
                    <li><h4>Navn: ${innhold.name}</li></h4>
                    <li><h4>Epost: ${innhold.email}</li></h4>
                    <li><h4>Tekst: ${innhold.body}</li></h4>
                    <hr>
            `)
        })

        .catch(() => utskrif.innerHTML = `Dang! Fikk ikke tak i API.`)
        .finally(() => utskrift.innerHTML += `Takk for idag, ha en trivelig dag.`);
}

// Oppgave 2 B. Samme funksjon men med Async og Await //

async function hentAPI2() {
    let utskrift = document.getElementById("utskrift4");

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/comments/");
        let data = await res.json();

        data.forEach((innhold) => {
            utskrift.innerHTML += `
                <ul>
                    <li><h4>Navn: ${innhold.name}</li></h4>
                    <li><h4>Epost: ${innhold.email}</li></h4>
                    <li><h4>Tekst: ${innhold.body}</li></h4>
                    <hr>
                </ul>
            `;
        });
    } catch (error) {
        
        console.error('Feil ved henting av data fra API:', error);
    }

    finally {
        utskrift.innerHTML += `Takk for idag, ha en fisefin dag.`;
    }

        
}

// Oppgave 3. Array med strømpriser //

function stromPriser() {
let strom = [1.3 , 2.3, 9.0, 3.3, 2.4, 5.5, 6.7, 9.9, 2.3, 3.4, 4.5, 5.6, 7.7, 6.3 , 7.3, 3.0, 6.3, 5.4, 3.5, 6.9, 10.2, 2.3, 3.4, 4.5, 4.6, 2.7, 3.4, 5.6, 8.9, 9.4, 2.2, 3.4];
let utskrift = document.getElementById("utskrift5");

let total = strom.reduce((a,b) => a + b, 0);
let gjennomsnitt = total / strom.length;
let priserOverTo = strom.filter(item => item > 2).toSorted((a,b) => a - b);

utskrift.innerHTML = `
Total strømpris: ${Math.round(total)} kr,- <br> 
Gjennomsnittlig strømpris: ${Math.round(gjennomsnitt)} kr,- <br> 
Strømpriser over 2,- (stigende rekkefølge): ${priserOverTo.join(', ')}
`;

}