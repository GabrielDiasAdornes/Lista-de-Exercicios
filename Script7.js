let ipValor = document.querySelector("#ipValor");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function Impar(){
    let vlr = Number(ipValor.value);

    //Verificando se o valor Dividido por 2 é diferente de 0
        if(vlr % 2 !== 0){
            h3Resultado.innerHTML =
            +vlr+":Valor &eacute; impar"
        } else{ h3Resultado.innerHTML =
            +vlr+":Valor n&atilde;o &eacute; impar" }

}

btVerificar.onclick = function(){
    Impar();
}