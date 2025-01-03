// AULA 2 - condicionais

// IF, ELSE IF, ELSE
let hora = 19;

if (hora < 12) {
    console.log("bom dia")
} else if (hora < 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}

// Switch Case

let diaDaSeamana = 3;

switch (diaDaSeamana) {
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    default:
        console.log("é um dia ai que não sei")
};
// EX04
export let livro = {
    titulo: "ola mundo",
    autor: "anthony",
    ano: 1920,
};

// EXERCICIOS Aula 02

// EX01
let horas = 14

if (horas < 12) {
    console.log("Bom dia")
} else if (horas < 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}

// EX02
let mes = 3

switch (mes){
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("março")
        break
}

// EX03
let idade = 18

if (idade < 18) {
    console.log("Não pode dirigir")
} else {
    console.log("Pode dirigir")
}

// EX04
let saldo = -18.50

if (saldo < 0){
    console.log("Saldo negativo")
} else {
    console.log("Saldo positivo")
}

// EX05
let numero2 = 0

if (numero2 < 0) {
    console.log("Número negativo")
} else if (numero2 == 0) {
    console.log("Número é 0")
} else {
    console.log("Número é positivo")
}

//EX06 
let acao = 2

switch (acao){
    case 1:
        console.log("1-sacar")
        break
    case 2:
        console.log("2-depositar")
        break
    case 3:
        console.log("3-saldo")
        break
}