function leggTilDucks() {
    let noenDucks = ["Ole", "Dole", "Doffen", "Donald", "Dolly"];

    let ny01 = document.createElement("table");
    ny01.setAttribute("id", "min01");
    document.getElementById("output").appendChild(ny01);

    let nyTr1 = document.createElement("tr");
    nyTr1.innerText = noenDucks[0];
    document.getElementById("output").appendChild(nyTr1);

}