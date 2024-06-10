function antallDager() {
    let text;
    let maaned = document.getElementById("month").value;

    switch (maaned) {
        case "Januar", "januar":
            text = "Januar har 31 dager.";
            break;
        case "Februar", "februar":
            text = "Februar har 28 dager.";
            break;
        case "Mars", "mars":
            text = "Mars har 31 dager.";
            break;
        case "April", "april":
            text = "April har 30 dager.";
            break;
        case "Mai", "mai":
            text = "Mai har 31 dager.";
            break;
        case "Juni", "juni":
            text = "Juni har 30 dager.";
            break;
        case "Juli", "juli":
            text = "Juli har 31 dager.";
            break;
        case "August", "august":
            text = "August har 30 dager.";
            break;
         case "September", "september":
            text = "September har 31 dager.";
            break;
        case "Oktober", "oktober":
            text = "Oktober har 30 dager.";
            break;
        case "November", "november":
            text = "November har 31 dager.";
            break;
        case "Desember", "desember":
            text = "Desember har 31 dager.";
            break;
    }
    document.getElementById("output").innerHTML = text;


}