// Dia 4 desafio 31 - strings

let nome = 'Anthony';
let sobrenome = "Chagas";

// concatenação
let saudacao = `Olá, ${nome} ${sobrenome}`;
console.log(saudacao);

saudacao = "olá " + nome + " " + sobrenome;

// Manipulando strings
let palavra = "Programação";

console.log(palavra[1]); // lembrado que a contagem começa em 0 (zero nessa situação irar mostrar a letra "P")

let frase = "Eu gosto de programar em JavaScript";

console.log(frase.slice[25, 35]); // irá mostrar a palavra "JavaScript"

let saudacao2 = "Olá, mundo!";

console.log(saudacao2.replace("mundo", "mundo cruel")); // irá substituir a palavra "mundo" por "mundo cruel"

//checking strings - verificando strings - verificando se a string contém um determinado caractere ou palavras

let email = "exemplo@exemplo.com";
console.log(email.includes("@")); // irá mostrar "true" pois o email contém o símbolo "@"

if (email.includes("@")) {
  console.log("Email válido");
} else {
  console.log("Email inválido");
}


// Exercícios de fixação - strings

// 1. Crie uma variável chamada "nome" e mostre o primerio nome.
let nomeCompleto = "Anthony Chagas Zatta";

console.log(nomeCompleto.slice(0, 8));

// 2. Verifique se a string "Java" e exiba uma frase personalizada.

let frasePersonalizada = "Eu gosto de programar em python";

if (frasePersonalizada.includes("Java")) {
  console.log("Eu gosto de programar em Java");
} else  {
  console.log("Eu não gosto de programar em Java");
}

// 3. Converta uma frase para letras maiúsculas e tere o  espaço em branco no inicio e no final da frase.

let fraseConvertida = "   Eu gosto de programar em JavaScript   ";

fraseConvertida = fraseConvertida.toUpperCase();
fraseConvertida = fraseConvertida.trim();

console.log(fraseConvertida);

// 3. Outra forma de fazer o exercício 3

console.log(fraseConvertida.toUpperCase().trim());

// 4. Substitua a palavra "erro" por "correção" nesta frase ("Há um erro na linha 10 do código").

let fraseComErro = "Há um erro na linha 10 do código";
console.log(fraseComErro.replace("erro", "correção"));

// 5. Divida a frase "Eu amo javaScript" em palavras e mostre o resultado.

let fraseDividida = "Eu amo javaScript";
console.log(fraseDividida.split(" "));

// 6. Valide se uma URL começa com "https://" e termine com ".com".

let url = "https://www.google.com";
if (url.startsWith("https://") && url.endsWith(".com")) {
  console.log("A URL é válida");
} else {
    console.log("A URL é inválida");
}
