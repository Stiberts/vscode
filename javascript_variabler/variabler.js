function navn(){
    let fornavn, etternavn;
    fornavn= prompt("Hva heter du til fornavn?"); 
    etternavn= prompt("Hva heter du til etternavn?");
    //ditt_navn="Ditt navn er: "+ fornavn + " " + etternavn;

    ditt_navn=`Ditt navn er: ${16*5}  ${etternavn}`;

    document.getElementById("navn").innerHTML = ditt_navn;
}

function fav_bilmerker(){
    const cars = ["Volvo", "Wolkswaagen", "Toyota", "Ferrari"]
}

