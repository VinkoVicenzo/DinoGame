function pula(){

    if(trex.classList != "pular"){
        trex.classList.add("pular");
    }
    setTimeout(function(){
        trex.classList.remove("pular");
    },500);

}

var vivo =true;
var cont = 10;
var pontuacaoFinal = 0;

var verificaJogo = setInterval(function(){
    var trexAltura = parseInt(window.getComputedStyle(trex).getPropertyValue("top"));
    var cacto = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"));

    if(cacto < 90 && cacto > 0 && trexAltura>= 220){
        obstaculo.classList.remove("jogar");
        vivo = false;
        document.getElementById('pont').innerHTML = "Você Perdeu, sua pontuação foi de "+pontuacaoFinal+" pontos";
        trex.classList.add("remove");
        obstaculo.classList.add("remove");
    }

},10);

function recarrega(){
    location.reload();
};

function jogar(){
    var pontuacao = setInterval(function(){
        if(vivo == true){
            for(var i=0; i <10 ; i++){
                pontuacaoFinal += cont;
                i++;
                console.log(pontuacaoFinal)
                document.getElementById('pont').innerHTML = pontuacaoFinal;
            }
        }
    },1000);
 
    var niveis = setInterval(function(){
        if(pontuacaoFinal > 1 && pontuacaoFinal < 3999){
            obstaculo.classList.add("jogar")
        }else if(pontuacaoFinal > 4000 && pontuacaoFinal < 7999){
            obstaculo.classList.remove("jogar");
            obstaculo.classList.add("nivelUm");
        }else if(pontuacaoFinal > 8000 && pontuacaoFinal < 11999){
            obstaculo.classList.remove("nivelUm");
            obstaculo.classList.add("nivelDois");
        }else if(pontuacaoFinal > 12000 && pontuacaoFinal < 15999){
            obstaculo.classList.remove("nivelDois");
            obstaculo.classList.add("nivelTres");
        }else if(pontuacaoFinal > 16000 && pontuacaoFinal < 19999){
            obstaculo.classList.remove("nivelTres");
            obstaculo.classList.add("nivelQuatro");
        }else if(pontuacaoFinal > 20000){
            obstaculo.classList.remove("nivelQuatro");
            obstaculo.classList.add("nivelCinco");
        }

    },10);
}