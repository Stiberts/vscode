function lagEpost() {
    let fornavn = document.getElementById("fnavn").value;
    let partFornavn = fornavn.slice(0,3);
    let etternavn = document.getElementById("enavn").value;
    let mellomnavn = document.getElementById("mnavn").value;
    let partMellomnavn = mellomnavn.slice(0,2);

    let dinEpost = partFornavn + "." + partMellomnavn + "." + etternavn + "@" + "alf.no" ; 

    let dinEpost2 = partFornavn + "-" + etternavn + "@" + "alf.no";

    if (mellomnavn == "") {
        document.getElementById("melding").innerHTML = `Din e-post er: ${dinEpost2}`;
        document.getElementById("melding").classList.add("greenbox");

    }

    else {
        document.getElementById("melding").innerHTML = `Din e-post er: ${dinEpost}`;
        document.getElementById("melding").classList.add("greenbox");
    }
}