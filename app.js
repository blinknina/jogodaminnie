let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo da Minnie');
    exibirTextoNaTela('p', 'Quantos nuggets a Minnie vai ganhar, entre 1 e 10?');
}

exibirMensagemInicial();

function verificarChute() {
        let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Você deu a quantidade certa pra Minnie!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Que burro, acertou com ${tentativas} ${palavraTentativa}.`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Calma, você quer deixar ela obesa?');
        } else {
            exibirTextoNaTela('p', 'Só isso? A Minnie continua triste e faminta.');
        }
            tentativas++;
            limparCampo();
        }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}