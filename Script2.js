let ipPreçoKG = document.querySelector("#ipPreçoKG");
let ipQuantiaKG = document.querySelector("#ipQuantia");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let vlrKG = Number(ipPreçoKG.value);
    let NumberKG = Number(ipQuantiaKG.value);

    //Calcular o preço do KG
        let preço = (vlrKG * NumberKG);
    
    h3Resultado.innerHTML =
    "Valor: "+preço+"<br>";
}

btCalcular.onclick = function(){
    calcular();
}