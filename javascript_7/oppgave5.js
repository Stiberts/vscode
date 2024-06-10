function dinDato(){

let tekstInput = document.getElementById("dato").value;
let output = document.getElementById("output");

let result = tekstInput.slice(0,2);
let month = parseInt(tekstInput.slice(3));

let mnd = "";


switch (month) {
    case 1:
        mnd = "Januar";
        break;
    case 2:
        mnd = "Februar";
        break;
    case 3:
        mnd = "Mars";
        break;
    case 4:
        mnd = "April";
        break;
    case 5:
        mnd = "Mai";
        break;
    case 6:
        mnd = "Juni";
        break;
    case 7:
        mnd = "Juli";
        break;
    case 8:
        mnd = "August";
        break;
    case 9:
        mnd = "September";
        break;
    case 10:
        mnd = "Oktober";
        break;
    case 11:
        mnd = "Nobember";
        break;
    case 12:
        mnd = "Desember";
        break; 
}
output.innerHTML = `Du skrev inn ${result}. ` + mnd;

}