function helloWorld() {

    const utskriftDiv = document.getElementById("utskrift1");
    utskriftDiv.innerHTML = "";
    for(let i = 0; i < 10; i++ ) {
        utskriftDiv.innerHTML += `Hello World!<br>`;
    }

}