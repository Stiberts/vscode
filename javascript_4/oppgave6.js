let utskrift = document.getElementById("utskrift");

function mittSnitt(){

    let num1 = Number(document.getElementById("norsk").value);
    let num2 = Number(document.getElementById("engelsk").value);
    let num3 = Number(document.getElementById("matte").value);
    let num4 = Number(document.getElementById("naturfag").value);
    let num5 = Number(document.getElementById("historie").value);
    let num6 = Number(document.getElementById("sfag").value);

    let sum = num1 + num2 + num3 + num4 + num5 + num6;
    let snitt = sum / 5;
    utskrift.innerHTML = snitt;
}