function whileLoop() {
    let sum = 0;
    let nummer = 0;
    let utskrift = document.getElementById("output");

    while (sum <= 1238) {
        nummer ++;
        sum += nummer;
    }
    utskrift.innerHTML = `Tallet som passerte målstreken er: ` + sum;
    
}





