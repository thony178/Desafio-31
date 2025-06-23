// Dia 3 desafio 31 - Booleans

let verdadeiro = true;
let falso = false;

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
console.log(5 == 5); // true
console.log(5 != 4); // true

// operadores lógicos ( &&, ||, !)

let idade  = 20;
let temCarteira = true;

// condição AND (&&) As duas condições devem ser verdadeiras
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// condição OR (||) Apenas uma das condições deve ser verdadeira
if (idade >= 18 || temCarteira) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// operador NOT (!) Inverte o valor de uma expressão booleana
if (!temCarteira) {
    console.log("Não pode dirigir");
} else {
    console.log("Pode dirigir");
}

// Exercícios 

// 1. verificar se um número é maior que 10 e menor que 20

let numero = 15;

if (numero >= 10 && numero < 20) {
    console.log("O número está entre 10 e 20");
} else {
    console.log("O número não está entre 10 e 20");
}

// 2. verificar se a pessoa pode votar

let Idade = 18;
let TituloEleitor = true;

if (Idade >= 16 && TituloEleitor) {
    console.log("pode votar");
} else {
    console.log("não pode votar");
}

// 3. Sistema de Notas

let notaAluno = 55;

if (notaAluno >= 90) {
    console.log("Sua nota é A");
} else if (notaAluno >= 70 && notaAluno < 90) {
    console.log("Sua nota é B");
} else {
    console.log("Sua nota é C");
}

// 4. Verificar se tem saldo na conta

let saldoConta = 100;

if  (saldoConta > 0) {
    console.log("Você tem saldo na conta");
} else if (salldoConta === 0) {
    console.log("Você não tem saldo na conta");
} else {
    console.log("Você está com o saldo da conta negativo");
}

// 5. Verificar se a luz está acesa

let luz = false;

if (!luz) {
    console.log("A luz está acesa");
} else {
    console.log("A luz está apagada");
}