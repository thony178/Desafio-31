// Dia 5 desafio 31 - Loops

// for - estrutura de repetição que permite executar um bloco de código várias vezes com base em uma condição.

for (let indice = 1; indice <= 20; indice++) {
  console.log("Número", indice);
}

// while - estrutura de repetição que permite executar um bloco de código enquanto uma condição é verdadeira.

let contador = 0;

while (contador <= 10) {
    console.log("Contador:", contador);

    contador++;
}


// breeak - permite interromper a execução de um loop antes de sua conclusão normal.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// continue - permite pular uma iteração de um loop e continuar com a próxima iteração.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Exercícios de fixação - loops

// 1. Crie um loop que exiba os números de 1 a 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Crie uma lista de nomes e utilize o loop para exibir cada nome.

let nomes = ["Anthony", "Brunão", "Matheus", "Romario"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// 3. Escreva um código que verifica se um número em um array é 
// maior que 10. Pare de verificar assim que encontrar o primeiro.

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < number.length; i++) {
    if (number[i] > 10) {
        console.log(number[i]);
        break;
    }
}

// 4. Escreva um código que verifica se um número em um array é maior que 10. 
// Pare de verificar assim que encontrar o primeiro.

let contagemRegre = 10;

while (contagemRegre >= 0) {
    console.log(contagemRegre);
    contagemRegre--;
    if (contagemRegre === 0) {
        console.log("Contagem regressiva finalizada!");
        break;
    }
}

// 5. Escreva um loop que calcula o fatorial de um número (ex: 5! = 5*4*3*2*1).

let numero = 5;
let fatorial = 1;
for (let i = numero; i >= 1; i--) {
    fatorial *= i;
}
console.log(fatorial);