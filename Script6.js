let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let ipValor3 = document.querySelector("#ipValor3");
let ipValor4 = document.querySelector("#ipValor4");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function AcharMenor(){
    let vlr1 = Number(ipValor1.value);
    let vlr2 = Number(ipValor2.value);
    let vlr3 = Number(ipValor3.value);
    let vlr4 = Number(ipValor4.value);

    //Verificando o Menor número
     let  Menor = vlr1;
       if(vlr2 < Menor){
        Menor = vlr2;
       }
       if(vlr3 < Menor){
        Menor = vlr3;
       }
       if(vlr4 < Menor){
        Menor = vlr4;
       }
    
    h3Resultado.innerHTML =
    "Menor Valor: "+Menor+"<br>"
}

btCalcular.onclick = function(){
    AcharMenor();
}