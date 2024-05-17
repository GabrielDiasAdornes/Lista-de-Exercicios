let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let vlr1 = Number(ipValor1.value);
    let vlr2 = Number(ipValor2.value);

    //Calcular o Troco
        let Troco = (vlr1 - vlr2);
    
    h3Resultado.innerHTML =
    "Troco: "+Troco+"<br>";
}

btCalcular.onclick = function(){
    calcular();
}