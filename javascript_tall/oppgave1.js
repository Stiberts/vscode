function knapp(){
    let dittTall, half, double, tripple, selv;
    dittTall = document.getElementById("tall").value;
    half = dittTall / 2;
    double = dittTall * 2;
    tripple = dittTall * 3;
    selv = dittTall * dittTall;
    document.getElementById("demo").innerHTML = `Du skrev inn tallet ${dittTall}. Halvparten av ${dittTall} er ${half}. Det dobble er ${double} og det tredobbelte er ${tripple}. Ganget med seg selv blir tallet ${selv}.`;
}