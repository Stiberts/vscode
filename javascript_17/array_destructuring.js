function familienAndeby() {
    let utskrift = document.getElementById("utskrift");
    let ducks = ["Ole", "Dole", "Doffen", "Donald", "Dolly"];
    let [duck1, duck2] = ducks;

    utskrift.innerHTML = `Første duckling: ${duck1}, Andre duckling: ${duck2}`;

    let btn2 = document.createElement("button");
    btn2.setAttribute("id", "minButton");
    btn2.innerText = "Ny knott!";
    document.body.appendChild(btn2);
    
    btn2.addEventListener("click", function() {
        let [duck1, duck2, ...rest] = ducks;
        utskrift.innerHTML = `Første duckling: ${duck1}, andre duckling: ${duck2}, resten av familien ${rest}`;
    })

}