function logIn() {
    let bruker = document.getElementById("brukernavn").value;
    let passord = document.getElementById("passord").value;

    let registrertBruker = "Stian";
    let registrertPassord = "Berthelsen";

    if (bruker == registrertBruker && passord == registrertPassord) {
        document.getElementById("output").innerHTML = `Velkommen! Du er logget inn som ${bruker}.`;
        document.getElementById("output").classList.add("verified");
        document.getElementById("output").classList.remove("unverified");
        //document.getElementById("output").style.backgroundColor = "green";
        //document.getElementById("output").style.color = "white";
        //document.getElementById("output").style.padding = "4px";
        //document.getElementById("output").style.marginTop = "5px";
        //document.getElementById("output").style.borderRadius = "4px";
        //document.getElementById("output").style.width = "300px";
    }
    else {
        document.getElementById("output").innerHTML = `Brukernavn eller passord er feil.`;
        document.getElementById("output").classList.remove("verified");
        document.getElementById("output").classList.add("unverified");
        //document.getElementById("output").style.backgroundColor = "red";
        //document.getElementById("output").style.color = "white";
        //document.getElementById("output").style.padding = "4px";
        //document.getElementById("output").style.marginTop = "5px";
        //document.getElementById("output").style.borderRadius = "4px";
        //document.getElementById("output").style.width = "300px";
    }
}
