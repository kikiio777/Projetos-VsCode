function inserir(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero+num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length-1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    //pegar o resultado  no  id
    if(resultado){
        //esse eval faz os calculos e passando como parametro os  resultado 
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        alert("nada para calcular");
    }
}