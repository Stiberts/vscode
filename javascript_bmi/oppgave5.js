function bmiKalkis(){
    input1 = parseFloat(document.getElementById("tall_1").value);
    input2 = parseFloat(document.getElementById("tall_2").value);
    let hoyde = input1;
    let vekt = input2;
    //let squared = hoyde **2;
    dinBMI = hoyde / vekt;
    document.getElementById("demo").innerHTML = `Din BMI er ${dinBMI}`;

    
    
    //let height = parseInt(document.querySelector("#tall_1"));
    //let weight = parseInt(document.querySelector("#tall_2"));

    //let result = document.querySelector("#result");

    //let bmi = (weight / ((height * height)
                        ///10000)).toFixed(2);
        //document.getElementById("result").textContent = result;


}

