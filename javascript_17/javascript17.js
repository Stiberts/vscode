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
}