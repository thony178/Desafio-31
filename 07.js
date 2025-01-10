// Aula 07 - Funções

console.log("Boa tarde!")
console.log("Boa tarde!")
console.log("Boa tarde!")
console.log("Boa tarde!")

// Para não ficar repítindo muita coisa que é possivel resumir com op function

function boaTarde(){
    console.log("Boa tarde!")
}

boaTarde()
boaTarde()
boaTarde()

// Function  parametros ()

function darBoaTarde (nome) {
    console.log(`Boa tarde ${nome}`)
}

darBoaTarde("Erick")
darBoaTarde("Pedro")
darBoaTarde("Valter")

// Return

function somar (numeroA, numeroB){
    return numeroA + numeroB
}

let resultado = somar(1, 3)
console.log(resultado)

// Calculadora

function calculadora (a, b, operação){
    switch (operação){
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
            console.log("operação não é válida")
            break
    }
};

let resultado1 = calculadora(1, 2, "+");
console.log(resultado);
// As funções torna uma parte do codigo ser reultilizavel

// Exercicios

// EX01
function dobroDoNumber (numero) {
    return 2 * numero
}
let resultado2 = dobroDoNumber(2)
console.log(resultado2)

// EX02
function boaVindas (nome1) {
    console.log(`boas-vindas ${nome1}!`)
}
boaVindas("THONY")

// EX03
function qualMaior (Num1, Num2){
    if (Num1 > Num2){
        return Num1
    } else {
        return Num2
    }
}
let resultado3 = qualMaior(1, 7)
console.log(`O maior número é ${resultado3}`)

// EX04
function mediaNum (num1, num2, num3){
    return num1 + num2 + num3
}
let result = mediaNum(2, 2, 2)
console.log(result / 3)

// EX05 
function somarNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

let arrayNumeros = [10, 20, 30, 40, 50];
let resultado4 = somarNumeros(arrayNumeros);
console.log("A soma dos números é: " + resultado4);

// EX06
function caratcString (quantidade){
    return quantidade.length
}
let stringquant = caratcString("ADO")
console.log(stringquant)
