var carta1 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia:7
    }
};

var carta2 = {
    nome: "Shiryu de Dragão",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 9
    }
};

var carta3 = {
    nome: "Bulbassauro",
    atributos: {
        ataque: 10,
        defesa: 7,
        magia: 8
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];

    cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
    while (cartaJogador == cartaMaquina) {
        cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
    }
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='"
            + atributo + "'>" + atributo + "<br/>";
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributo() {
    var radioAtributos = document.getElementsByName("atributo");
    for (let i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributo();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador > valorCartaMaquina ) {
        elementoResultado.innerHTML = "Você venceu!";
    } else if(valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = "Você perdeu!";
    } else{
        elementoResultado.innerHTML = "Empatou!";
    } 
}