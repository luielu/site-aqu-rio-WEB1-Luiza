
function calc() {
    
    var e1 = parseFloat(document.getElementById("altura").value);
    var e2 = parseFloat(document.getElementById("largura").value);
    var e3 = parseFloat(document.getElementById("comprimento").value);
    var volume = e1*e2*e3;
    var litragem = volume/1000;
    
    document.getElementById("volume").innerHTML = 'Volume: ' + litragem + ' L';

    let div = Math.ceil(litragem/50);
    let aquecedor = div*50
    var bomba = (litragem)*6;

    document.getElementById("aquecedor").innerHTML = 'Aquecedor: ' + aquecedor.toFixed(2) + 'W';

    document.getElementById("bomba").innerHTML = 'Bomba: ' + bomba.toFixed(2) + 'L/h';

    if (parseFloat(document.getElementById("altura").value) <= 0) {
        alert("Campo 'altura' vazio");
    }

    else if (parseFloat(document.getElementById("largura").value) <= 0) {
        alert("Campo 'largura' vazio");
    }

    else if (parseFloat(document.getElementById("comprimento").value) <= 0) {
        alert("Campo 'comprimento' vazio");
    }
}


/*
function calc()
{
var e1 = parseFloat(document.getElementById("comprimento").value);
var e2 = parseFloat(document.getElementById("altura").value);
var e3 = parseFloat(document.getElementById("largura").value);

var volume = e2*e3*e1;
var aquecedor = (volume)/1000;
var bomba = (aquecedor)*6;



if(volume >= 1000){
    var litragem = volume/1000;
    document.getElementById("volume").innerHTML = litragem.toFixed(2) + 'L';
}
else if (volume < 1000){
    document.getElementById("volume").innerHTML = volume.toFixed(2) + "cm³";
}

if(bomba <= 50){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 50L/h';
}

else if(bomba > 50 && bomba <=100){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 100L/h';
}

else if(bomba > 100 && bomba <=150){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 150L/h';
}

else if(bomba > 150 && bomba <=200){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 200L/h';
}

else if(bomba > 200 && bomba <=500){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 500L/h';
}

else if(bomba > 500 && bomba <=1000){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 1000L/h';
}

else if(bomba > 1000 && bomba <=5000){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 5000L/h';
}

else if(bomba > 5000 && bomba <=10000){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 10000L/h';
}

else if(bomba > 10000 && bomba <=50000){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 50000L/h';
}

else if(bomba > 500000 && bomba <=100000){
    document.getElementById("bomba").innerHTML = 'Seu aquário necessita de uma bomba de 100000L/h';
}

/*
if (aquecedor <=50){
    document.getElementById("aquecedor").innerHTML = 'Seu aquário necessita de um aquecedor de 50W';
}

if (aquecedor > 50 && aquecedor <=100){
    document.getElementById("aquecedor").innerHTML = 'Seu aquário necessita de um aquecedor de 100W';
}

if (aquecedor > 100 && aquecedor <=150){
    document.getElementById("aquecedor").innerHTML = 'Seu aquário necessita de um aquecedor de 150W';
}

if (aquecedor > 150 && aquecedor <=200){
    document.getElementById("aquecedor").innerHTML = 'Seu aquário necessita de um aquecedor de 200W';
}

if (aquecedor > 200 && aquecedor <=500){
    document.getElementById("aquecedor").innerHTML = 'Seu aquário necessita de um aquecedor de 500W';
}

if (aquecedor > 500 && aquecedor <=1000){
    document.getElementById("aquecedor").innerHTML = 'Seu aquário necessita de um aquecedor de 10000W';
}

if (aquecedor > 1000 && aquecedor <=5000){
    document.getElementById("aquecedor").innerHTML = 'Seu aquário necessita de um aquecedor de 50000W';
}

if (aquecedor > 5000 && aquecedor <=100000){
    document.getElementById("aquecedor").innerHTML = 'Seu aquário necessita de um aquecedor de 100000W';
}

}

*/

