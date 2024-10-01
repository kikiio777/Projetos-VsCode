const celulas = document.querySelectorAll(".celula");

let checarTurno = true;
console.log(celulas);

const jogador_X ="X";
const jogador_O ="O";
const COMBINACOES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

document.addEventListener("click" , (event)=>{
    //se o evento pegar o alvo identificado que seria esse
    //matches  que é a celula executa o console log 
    // se o alvo idendificado for celular faz a func jogar
    if(event.target.matches(".celula")){
        jogar(event.target.id);
    }
});

function jogar(id){
    
    // const  DOM por id  depois turno checa
    //se e true ou false se true X senao O
    const celula = document.getElementById(id);

    if(celula.textContent !== ""){
        return;
    }
    turno = checarTurno ? jogador_X : jogador_O;
    //a celula escrevera a string do turno X ou O
    celula.textContent = turno;
    celula.classList.add(turno); 
    
    //Aqui faz o checar turno e se tiver x vira o e vice versa
    checarVencedor(turno);
}

function checarVencedor(turno){
    //percorrer a combinacoes e o some se algun for true tds sao
 const vencedor = COMBINACOES.some((comb) =>{
    //every se uma for falsa todas sao false
    return comb.every((index)=>{
        return celulas[index].classList.contains(turno);
    })
 });
    if(vencedor){
        encerrarJogo(turno);
    }else if(checarEmpate()){
        encerrarJogo();
    } else{
        checarTurno = !checarTurno;
    }
}
// esse parametro significa  se vier com parametro vai ser o
//vencedor senao vai ser null que no caso e empate
function checarEmpate(){
    let x= 0;
    let o= 0; 
//percorrendo o array e adiciona 1em 1
    for(index in celulas){
        if(!isNaN(index)){
            if(celulas[index].classList.contains(jogador_X)){
                x++;
             }
    
             if(celulas[index].classList.contains(jogador_O)){
                o++;
             }
        }
         
    }
    // se a soma de x com a de 0 for 9  = true => empate
    // senao continua jogando ate dar 9
    return x + o === 9 ? true : false;
}

function encerrarJogo(vencedor = null){
  const telaEscura = document.getElementById("tela-escura");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  let mensagem = null;

  telaEscura.style.display = "block";
  telaEscura.appendChild(h2);
  telaEscura.appendChild(h3);

     if(vencedor){
        h2.innerHTML = `O Jogador <span>${vencedor}</span> venceu`;
     }else{
        h2.innerHTML = "Empatou"; 
     }

     let contador = 3;
     setInterval(()=>{
       h3.innerHTML = `Reiniciando em ${contador--}`;
     },1000);

    setTimeout(()=> location.reload(),4000);
}