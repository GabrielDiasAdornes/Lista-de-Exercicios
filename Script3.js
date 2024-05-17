let ipSaldo = document.querySelector("#ipSaldo");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let Sld = Number(ipSaldo.value);

    //Ajustando o saldo em 1%
        let saldoAjustado = (Sld + Sld / 100);
    
    h3Resultado.innerHTML =
    "Ajuste: "+saldoAjustado+"<br>";
}

btCalcular.onclick = function(){
    calcular();
}