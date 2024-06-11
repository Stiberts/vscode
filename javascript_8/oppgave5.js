function leggtilInnbyggere() {
    let beboere = ["Ole", "Dole", "Doffen", "Donald", "Dolly"]
    let minStreng = "";
    
    minStreng = `<ol> Her er en nummerert liste over <ol> innbyggere i Andeby
                <br><br>
                <li> ${beboere[0]} 
                <li> ${beboere[1]} 
                <li> ${beboere[2]} 
                <li> ${beboere[3]} 
                <li> ${beboere[4]} 
                <ol>`;
                document.getElementById("output").innerHTML = minStreng;
                
}