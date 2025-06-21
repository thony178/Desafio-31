// Dia 1 desafio 31 - Variáveis

// O que é variavel?

let nome1 = "Anthony";

let cidade;
cidade = "São paulo";

console.log("Olá meu nome é", nome1, "e eu moro em", cidade);

// Quais os tipos de dados?

//    Strings
let Nome = "Anthony";

//    Number
let Number = 70.5;
Number = 50;

//    Boolean (True = verdade/ false = falso )
let maiorDidade = true;
maiorDidade = false;

//    Array (Array é qualquer tipo de lista)
let listaNumber = [1, 2, 3, 5];
let listaNome = ["Anthony", "Pedro"];
let listaBoolean = [true, false, false];

//   Objeto
let pessoa = {
    Nome: "Anthony",
    Cidade: "São paulo",
    Idade: 19
}

console.log(pessoa.Nome);


// Atividade de reforço do que foi ensinado

// 1
const nome2 = "anthony";
const idade = "19";

console.log("Olá meu nome é",nome2,"e eu tenho",idade,"anos");

// 2
const PrecoArroz = 25.90;
const DescontoPorcentagem = 15;
const valor = PrecoArroz * (DescontoPorcentagem / 100);
const valorFinal = PrecoArroz - valor;
console.log("o valor do aroz com o desconto é de", valorFinal);

// 3
let ComidasFavoristas = ["lasanha", "Panquecas", "Bolo com musi de uva"];
let item = ComidasFavoristas[1];
console.log(item);

// 4
const Livro = {
    Titulo: "O piqueno principe",
    Autor: "Antoine de Saint-Exupéry",
    Ano: 1943
}

console.log("O livro", Livro.Titulo, "foi escrito por", Livro.Autor, "no ano de", Livro.Ano);

// 5
let estaLogado = false;
estaLogado = true;
console.log("O usuário está logado?", estaLogado);

// 6
const PI = 3.14;
const raio = 5;
const area = PI * raio ** 2;

console.log("A área do círculo é:", area);