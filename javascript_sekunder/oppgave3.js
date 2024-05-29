function konverterTid() {
    dinInput = document.getElementById("tall").value;
    let timer = Math.floor(dinInput / 3600);
    let minutter = Math.floor(dinInput % 3600 / 60);
    let sekunder = Math.floor(dinInput % 3600 % 60);
    document.getElementById("demo").innerHTML = `${dinInput} sekunder tilsvarer ${timer} timer, ${minutter} minutter og ${sekunder} sekunder. <br>
    ---------->${timer}: ${minutter}: ${sekunder}<-------------`
    
}

