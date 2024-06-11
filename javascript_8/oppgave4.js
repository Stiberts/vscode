function gjennomsnitt() {
let dineTall = document.getElementById("input").value;
let antallTall = dineTall.replace(/[^0-9]/g, "").length;

document.getElementById("output").innerHTML = `Du skrev inn ${antallTall}`;

}

