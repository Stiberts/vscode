function bmiKalkis(){
    //input1 = document.getElementById("tall_1").value;
    //input2 = document.getElementById("tall_2").value;
    //let hoyde = input1;
    //let vekt = input2;
    //let squared = Math.pow(input1, 2);
    //dinBMI = (vekt) / (hoyde * hoyde);
    //document.getElementById("demo").innerHTML = `Din BMI er ${dinBMI}`;

    let button = document.querySelector("#btn");
    button.addEventListener("click", bmiKalkis);
    
    let height = parseInt(document.querySelector("#tall_1"));
    let weight = parseInt(document.querySelector("#tall_2"));

    let result = document.querySelector("#result");

    let bmi = (weight / ((height * height)
                        /10000)).toFixed(2);
        if (bmi >= 18.6 && bmi < 24.9)
                result.innerHTML = 
                    `Normal : <span>${bmi}>/span>`;


}