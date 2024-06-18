function whileLoop() {
    let sum = 1;
    let nummer = 0;
    let utskrift = document.getElementById("output");

    while (sum <= 1238) {
        nummer ++;
        sum += nummer;
    }
    utskrift.innerHTML = `Tallet som passerte målstreken er: ` + sum;
    
}

function whileLoop2() {
    let sum = 0;
    let nummer = 0;
    let utskrift = document.getElementById("output2");

    while (sum <= 2250) {
        nummer ++;
        sum += nummer;
    }
    utskrift.innerHTML = `Tallet som passerte målstreken er: ` + sum;
    
}

//Oppgave 2//
function gangeTabell() {
    let utskrift = document.getElementById("output3");
    let tall1, tall2;
    let tabell = '<table>';

    for (tall1 = 1; tall1 <= 10; tall1++) {
        tabell += '<tr>';

        for (tall2 = 1; tall2 <=10; tall2++) { 
            tabell += `<td> ${tall1} x ${tall2} = ${tall1 * tall2} </td>`;
        }
        tabell += '</tr>';
    }
    
    tabell += '</table>'
    utskrift.innerHTML = tabell;
    
}

//Oppgave 2.b//
function gtDiagonal() {
    let utskrift = document.getElementById("output4");
    let tall1, tall2;
    let tabell = '<table>';

    for (tall1 = 1; tall1 <= 10; tall1++) {
        tabell += '<tr>';

        for (tall2 = 1; tall2 <=10; tall2++) {
            if (tall1 !== tall2) {
                continue;
            } 
            tabell += `<td> ${tall1} x ${tall2} = ${tall1 * tall2} </td>`;
        }
        tabell += '</tr>';
    }
    
    tabell += '</table>'
    utskrift.innerHTML = tabell;
    
}





