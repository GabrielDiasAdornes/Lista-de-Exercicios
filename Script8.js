let ipCodigo = document.querySelector("#ipCodigo");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function acharProduto(){
    let code = Number(ipCodigo.value);

    //Verificando o Menor número
      if(code = 1 ){
        h3Resultado.innerHTML =
        "C&oacute;digo para: Parafuso";
       };
       if(code = 2 ){
        h3Resultado.innerHTML =
        "C&oacute;digo para: Porca";
       };
       if(code = 3 ){
        h3Resultado.innerHTML =
        "C&oacute;digo para: Prego";
       };
}

btVerificar.onclick = function(){
    acharProduto();
}