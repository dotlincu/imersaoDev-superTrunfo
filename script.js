var carta1 = {
    nome: "Gintoki Sataka",
    imagem: "http://pm1.narvii.com/6344/7861a26b495569a5c6331058c0f8566dc7500a51_00.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia:7
    }
};

var carta2 = {
    nome: "Kenshin Himura",
    imagem: "https://s.aficionados.com.br/imagens/tudo-sobre-samurai-x_t.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 9 
    }
};

var carta3 = {
    nome: "Zoro",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/blob_va9k.jpg",
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

    exibirCartaJogador();
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
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador > valorCartaMaquina ) {
        divResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>";
    } else if(valorCartaJogador < valorCartaMaquina) {
        divResultado.innerHTML = "<p class='resultado-final'>Você perdeu!</p>";
    } else if(valorCartaJogador === valorCartaMaquina && valorCartaJogador != undefined) {
        divResultado.innerHTML = "<p class='resultado-final'>Empatou!</p>";
    } else 
        divResultado.innerHTML = "<p class='resultado-final'>Selecione um atributo!</p>"; 
    
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='"+ 
            atributo + "'>" + atributo.toUpperCase() + " " + 
            cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML =  "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for(let atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='"+ 
            atributo + "'>" + atributo.toUpperCase() + " " + 
            cartaMaquina.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}