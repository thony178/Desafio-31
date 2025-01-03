// Desafio 31 dias com Erick Scur

const { livro } = require("./02");

//Dia 1 - Variáveis
// O que é? E quais os tipos?

// Existe três tipos de variavel dentro do JS a const, let e var
// Const é um valor fixo que nunca muda, imutavel
// let é um valor mutavel
// var é un jeito antigo então usei menos

// Dica: Sempre depois de uma linha de código feita coloque ; para não ter dor de cabeça depois

let nome = "Anthony";

let cidade = "Rio de janeiro";

nome = "Thony";

cidade = "São paulo";

console.log("Olá meu nome é",nome,"e moro em",cidade);

//Tipos de dados

//String
let name = "String é tipo de texto";

//Number não tem diferencia do decimal para inteiro
let number = 70;

//boolean
let maiorIdade = true;

//Array
let lista = ["A, b , B"]

//Objeto
//let pessoa = {
 //   nome: Anthony
 //   idade: 18
 //   Cidade: São paulo
//};

//pessoa.idade // console.log vai mostrar só a idade dentro do objeto

// Exercicios aula 01

// EX01
let name2 = "anthony";
let idade2 = 18;

console.log("Olá", name2, "é um prazer te conhecer, sua idade é", idade2, "tá ficando velho eh")

// EX02
let prodPreco = 18.56;
let desconto = 7.50;

console.log("O valor do produto é", prodPreco, "e seu desconto é", desconto, "o valor final é",prodPreco - desconto, "reais")

// EX03

let comidas = ["arroz", "feijão", "lazanha"];
console.log(comidas[1]);

console.log("esse livro é do autor", livro.autor, "do ano",livro.ano);

// EX04

let estaLogado = false
estaLogado = true
console.log("Status do login:",estaLogado)

// EX05

let PI = 3.14;
let raio = 5;
let area = PI * raio * raio;

console.log("A área do círculo é: " + area);