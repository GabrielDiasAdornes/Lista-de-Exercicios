let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let ipValor3 = document.querySelector("#ipValor3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let vlr1 = Number(ipValor1.value);
    let vlr2 = Number(ipValor2.value);
    let vlr3 = Number(ipValor3.value);

    //Calcular Média Aritmetica
        let mediaAritmedica = (vlr1 + vlr2 + vlr3) / 3   ;

    //calcular a Média ponderada(3,2 e 5)
    let SomaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let SomaPesos = 3 + 2 + 5;
    let mediaPonderada = SomaValoresPesos / SomaPesos;

    //Soma das Médias
    let somaMedias = mediaAritmedica + mediaPonderada;

    //Media das Médias
    let mediaMedias = somaMedias / 2;
    
    h3Resultado.innerHTML =
    "Media Aritmetica: "+mediaAritmedica+"<br>"+
    " Media Ponderada: "+mediaPonderada+"<br>"+
    " Soma das Medias: "+somaMedias+"<br>"+
    " Media das Medias: "+mediaMedias;
}

btCalcular.onclick = function(){
    calcular();
}