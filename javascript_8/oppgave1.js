function sjekkPartall(){
    let input = document.getElementById("numb").value;
    let text;

    if (input % 2 == 0) {
        text = "Du har skrevet inn et partall";
    }
    else {
        text = "Du har skrevet et oddetall";
    }
    document.getElementById("output").innerHTML = text;
}