function lagEpost() {
    let fornavn = document.getElementById("fnavn").value;
    let mellomnavn = document.getElementById("mnavn").value;
    let etternavn = document.getElementById("enavn").value;

    document.getElementById("melding").innerHTML = `Du skrev inn ${fornavn} + ${mellomnavn} + ${etternavn}`;
}