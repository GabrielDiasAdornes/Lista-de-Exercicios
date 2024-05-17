let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function RetornarMaior(){
    let vlr1 = Number(ipValor1.value);
    let vlr2 = Number(ipValor2.value);
//If para comparação
if (vlr1 > vlr2){
    h3Resultado.innerHTML =
    "maior: "+vlr1+"<br>";} else { h3Resultado.innerHTML=
        "maior:"+vlr2+"<br>" }
}
btCalcular.onclick = function(){
    RetornarMaior();
}