function sjekkAlder(){
    input = document.getElementById("tall").value;
    let myndig;

    if (input >= 150) {
        myndig = 'Du er et mirakel!';
    }   
        else if (input >= 67) {
        myndig = 'Du er pensjonist.';
    }
        else if (input >= 18) {
            myndig = 'Du er myndig.'
        }
        else {
        myndig = 'Du er ikke myndig.';
    }
    document.getElementById("demo").innerHTML = myndig;
}

