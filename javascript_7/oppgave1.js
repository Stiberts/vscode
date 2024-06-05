let input = document.getElementById("hub").value;
let output = document.getElementById("outputtext").value;
hjemme = "H";
uavgjort = "U";
borte = "B";

btn.addEventListener('click', function(){
    if(input == hjemme){
        output.innerHTML = `Du tippet ${hjemme} for hjemmeseier`;
    }
    else if(input == uavgjort){
        output.innerHTML = `Du tippet ${uavgjort} for uavgjort`;
    }
    else{
        output.innerHTML = `Du tippet ${borte} for borteseier`;
    }


})