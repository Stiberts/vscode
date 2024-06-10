function sammenlignTall(){
    let input1 = document.getElementById("numb1").value;
    let input2 = document.getElementById("numb2").value;
    let text;

    if (input1 > input2) {
        text = "Første tall er størst";
    }
    else if (input2 > input1) {
        text = "Andre tall er størst";
    }
   else {
    text = "Tallene er like store";
   }
    document.getElementById("output").innerHTML = text;
}