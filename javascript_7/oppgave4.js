function regnBMI(){
    let vekt = document.getElementById("vekt").value;
    let hoyde = document.getElementById("hoyde").value;
    //let bmi = (vekt / ((hoyde*hoyde))).toFixed(2);
    let bmi = (vekt / ((hoyde*hoyde)));
    bmi = Math.round(bmi);

        if(bmi > 30){
            document.getElementById("utskrift").innerHTML = `Din BMI er ${bmi} og du har fedme.`;
        }
        else if (bmi >= 25 && bmi <= 29){
            document.getElementById("utskrift").innerHTML = `Din BMI er ${bmi} og du er lett overvektig.`;
        }
        else if (bmi >= 18.5 && bmi <=24.9) {
            document.getElementById("utskrift").innerHTML = `Din BMI er ${bmi} og du er normalvektig`;
        }
        else if (bmi < 18.4) {
            document.getElementById("utskrift").innerHTML = `Din BMI er ${bmi} og du er undervektig`;
        }

    //document.getElementById("utskrift").innerHTML = bmi;

}