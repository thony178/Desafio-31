// Aula 03 boolean

let verdadeiro = true
let falso = false

//operadores

console.log(5 > 6)
console.log(7 < 8)
console.log(7 == 2)
console.log(5 >= 5)
console.log(5 <= 7)

//operadores logicos

// duas condições precisão ser verdadeiras &&
let idade = 20
const eleTemCarteira = false

if (eleTemCarteira == true && idade >= 18){
    console.log("pode dirigir")
} else {
    console.log("Não pode dirigir")
}
// ou = || pelo menos uma verdadira
let idade2 = 20
const eleTemCarteira2 = false

if (eleTemCarteira2 == true || idade2 >= 18){
    console.log("pode dirigir")
} else {
    console.log("Não pode dirigir")
}

//Exercicios 03

//EX01
let nu = 15

if (nu > 10){
    console.log("É maior que 10")
} else if (nu < 20){
    console.log("É menor que 20")
} else {
    console.log("É um número ai")
}

//EX02
let idad = 16

if (idad >= 16){
    console.log("pode votar")
} else {
    console.log("não pode votar")
}

//EX03
let email = "thony@emal.br"
let nameConta = "ThonyPlayGames"
let senha = "123adim"

if ((email || nameConta)&& senha == "123adim"){
    console.log("Login concluido")
} else {
    console.log("Não foi possivel fazer login")
}

//EX04
let notaAluno = 85

if (notaAluno >= 90) {
    console.log("Nota A, de aprovado")
} else if (notaAluno >= 70 && notaAluno < 90) {
    console.log("Nota B, Batido mas foi")
} else {
    console.log("Nota C, corre que sua mãe vai te pegar!")
}

//EX05
let saldo = 500

if (saldo > 0) {
    console.log("Saldo positivo")
} else if (saldo == 0) {
    console.log("Sem money")
} else {
    console.log("Saldo negativo")
}

//EX06 
let luzAcessa = false

if (!luzAcessa) {
    console.log("Luz acessa")
} else {
    console.log("luz não acessa")
}