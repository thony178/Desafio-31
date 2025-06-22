const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Esses Desafios foram feitos com o auxilio de IA.

// Desafio 1 (Este é um desafio diario que eu irei usar a IA para
//  me fazer alguns desafios alem do que tem no Desafio 31 dias)

// Desafio Extra 1: Conversor de Temperatura

const Temperatura = 25;
const unidadeEntrada = ""; // Pode ser "C" para Celsius ou "F" para Fahrenheit "K" para kelvin
const unidadeSaida = ""; // Pode ser "C" para Celsius ou "F" para Fahrenheit "K" para kelvin

let resultado;

let tempCelsius;
if (unidadeEntrada === "C") {
    tempCelsius = Temperatura;
} else if (unidadeEntrada === "F") {
    tempCelsius = (Temperatura - 32) * 5/9;
} else if (unidadeEntrada === "K") {
    tempCelsius = Temperatura - 273.15;
}

if (unidadeSaida === "C") {
    resultado = tempCelsius;
} else if (unidadeSaida === "F") {
    resultado = (tempCelsius * 9/5) + 32;
} else if (unidadeSaida === "K") {
    resultado = tempCelsius + 273.15;
}

console.log(`${Temperatura} ${unidadeEntrada} é igual a ${resultado} ${unidadeSaida}`);

// Desafio Extra 2: Calculadora de IMC

const Altura = `1.75`;
const Peso = `70`;

let resultadoIMC = Peso / (Altura * Altura);

if (resultadoIMC < 18.5) {
    console.log("Abaixo do peso")
} else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
    console.log("peso normal")
} else if (resultadoIMC >= 25 && resultadoIMC < 30) {
    console.log("acima do peso")
}

// Desafio Extra 3: Jogo de adivinhação

const numeroSecreto = Math.floor(Math.random() * 20) + 1;
const numeroUsuario = `16`;

if (numeroSecreto === numeroUsuario) {
    console.log("Você acertou o número secreto!")
} else if ( numeroSecreto > numeroUsuario) {
    console.log("O número secreto é maior que o número digitado.")
} else if (numeroSecreto < numeroUsuario) {
    console.log("O número secreto é maior que o número digitado.")
}

// Segunda forma de fazer o desafio 3 // Para execurtar o desafio 3 use esse comando (node Des1.js)

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function fazerPergunta() {
    readline.question('Digite um número entre 1 e 100: ', (resposta) => {
        const palpite = parseInt(resposta);
        tentativas++;

        if (isNaN(palpite)) {
            console.log('Por favor, digite um número válido!');
        } else if (palpite === numeroAleatorio) {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`);
            readline.close();
        } else if (palpite < numeroAleatorio) {
            console.log('Dica: O número é MAIOR!');
            fazerPergunta();
        } else {
            console.log('Dica: O número é MENOR!');
            fazerPergunta();
        }
    });
}

console.log('Bem-vindo ao Jogo de Adivinhação!');
fazerPergunta();


// Desafio Extra 4: Validador de senha // Para executar o desafio 4 use esse comando(node Des1.js)


function validarSenha(senha) {
    const temOitoCaracteres = senha.length >= 8;
    const temLetraMaiuscula = /[A-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    return {
        valido: temOitoCaracteres && temLetraMaiuscula && temNumero && temCaracterEspecial,
        requisitos: {
            oitoCaracteres: temOitoCaracteres,
            letraMaiuscula: temLetraMaiuscula,
            numero: temNumero,
            caracterEspecial: temCaracterEspecial
        }
    };
}

readline.question('Digite uma senha para validar: ', (senha) => {
    const resultado = validarSenha(senha);
    
    console.log('\nResultado da validação:');
    console.log('✓ Mínimo 8 caracteres:', resultado.requisitos.oitoCaracteres ? 'Sim' : 'Não');
    console.log('✓ Letra maiúscula:', resultado.requisitos.letraMaiuscula ? 'Sim' : 'Não');
    console.log('✓ Número:', resultado.requisitos.numero ? 'Sim' : 'Não');
    console.log('✓ Caractere especial:', resultado.requisitos.caracterEspecial ? 'Sim' : 'Não');
    console.log('\nSenha é válida:', resultado.valido ? 'Sim!' : 'Não!');
    
    readline.close();
});

// Desafio Extra 5: Conversor de moeda // Para executar o desafio 5 use esse comando (node Des1.js)

const taxas = {
    dolar: 4.95,
    euro: 5.35,
    bitcoin: 230000.00
};

function mostrarOpcoes() {
    console.log('\nEscolha a moeda para conversão:');
    console.log('1 - Dólar');
    console.log('2 - Euro');
    console.log('3 - Bitcoin');
}

function converterMoeda(valor, moeda) {
    switch(moeda) {
        case '1':
            return valor / taxas.dolar;
        case '2':
            return valor / taxas.euro;
        case '3':
            return valor / taxas.bitcoin;
        default:
            return null;
    }
}

function iniciarConversao() {
    mostrarOpcoes();
    readline.question('\nDigite o número da moeda desejada: ', (moeda) => {
        readline.question('Digite o valor em Reais (R$): ', (valor) => {
            const valorNumerico = parseFloat(valor);
            const resultado = converterMoeda(valorNumerico, moeda);
            
            if (resultado !== null) {
                const moedaSimbolo = moeda === '1' ? 'USD' : moeda === '2' ? 'EUR' : 'BTC';
                console.log(`\nR$ ${valorNumerico.toFixed(2)} equivale a ${moedaSimbolo} ${resultado.toFixed(2)}`);
            } else {
                console.log('Opção inválida!');
            }
            
            readline.close();
        });
    });
}

console.log('Bem-vindo ao Conversor de Moedas!');
iniciarConversao();