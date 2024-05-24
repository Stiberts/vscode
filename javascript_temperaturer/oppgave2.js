function knapp(){
    let fahrenheit, celsius;
    fahrenheit = document.getElementById("tall").value;
    celsius = (fahrenheit - 32) * 5/9;  
    document.getElementById("demo").innerHTML = `${fahrenheit} Fahrenheit er ${celsius} grader Celsius. `
}