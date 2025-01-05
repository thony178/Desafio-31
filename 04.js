// aula 04 - String

//Tipos diferentes

let nome = 'joão'
let sobrenome = "Silva"
let saudação = `Olá, ${nome} ${sobrenome}` // essa é a melhor forma

saudações = "olá " + nome + " " + sobrenome // forma mais ruim de se fazer

console.log(saudações)

// Encontrar uma letra ou constar uma letra

let palavra = "programção"
console.log(palavra[1])

console.log(palavra.length)

// Corta uma frase

let frase = "eu amo programação!"
let palavra1 = frase.slice(6, 18)
console.log(palavra1)

// Modificar uma frase já construida antes

let novaSaudacao = saudação.replace("Olá, boa tarde")
console.log(novaSaudacao)

// Verificar se uma string conte algumas coias que vc queira

let email = "contato@umporcentoprogramador.com.br"
if (email.includes('.com.br')){
    console.log("Email valido")
} else {
    console.log("Email invalido")
}

// Exercicios 04

// EX01

let nome1 = "Anthony Chagas Zatta"
let firstNome = nome1.slice(0, 7)
console.log(firstNome)

// EX02

let palavra2 = "Eu odeio java mas amo python"
if (palavra2.includes('java')) {
    console.log("java é a melhor linguagem")
} else {
    console.log("Nos odiamos java")
}

// EX03

espaco = "  olá deus me ajuda   "
let semEspaco = espaco.toUpperCase().trim()

console.log(semEspaco)

// EX04

palavra3 = "Houve um pequeno erro no sistema"
let mudarPalabra3 = palavra3.replace("erro","coreção")
console.log(mudarPalabra3)

// EX05 

frase1 = "eu amo javaScript"
let mudaFrase1 = frase1.slice(0,2)
let mudaFrase2 = frase1.slice(2,6)
let mudaFrase3 = frase1.slice(7,18)
console.log(mudaFrase1,mudaFrase2,mudaFrase3)

// EX06

let URL = "https://Meumundo.com"
if (URL.includes('https://','.com')){
    console.log("URL valida")
} else {
    console.log("URL invalida")
}