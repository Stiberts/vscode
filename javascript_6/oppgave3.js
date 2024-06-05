
let voksenInput = document.getElementById("voksenInput").value;
let barnInput = document.getElementById("barnInput").value;
let honnorInput = document.getElementById("honnorInput").value;

//let voksenValgt = voksenInput * 100;
//let barnValgt = barnInput * 50;
//let honnorValgt = honnorInput * 60;

let enkelTur = document.getElementById("enkelTur");
let turRetur = document.getElementById("turRetur");

let billettPris = voksenInput + barnInput + honnorInput;
let rabbattPris = billettPris * 0.75;

let myBtn = document.getElementById("myBtn");
let output = document.getElementById("outputtext");

myBtn.onclick = function(){
    if(enkelTur.checked){
        output.innerHTML = `Din billettpris er ${billettPris} kr,-`;
    }
    else {
        output.innerHTML = `Din billetpris er ${rabbattPris} kr,-`;
    }

}
