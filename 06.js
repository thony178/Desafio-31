// Aula 06 - Array

// Um array vai sempre começar pelo 0. Ex (maça = 0, banana = 1) ["maçã", "banana"]

// Tipos de array

let nameLista = ["anthony", "Maçã", "csgo"]

let numberLista = [1, 2, 3, 4, 5, ,6]

let booleanLista = [true, false, true, true]

// Adicinando um elemento no array ou remover

// adicionando

let frutas = ["maçã", " banana", "goiaba"]

console.log(frutas)

frutas.push("pepino") // .push() vai semprer adicionar na ultima posiçõa

console.log(frutas)

// removendo

frutas.pop() // .pop()  vai remover o ultimo elemento do array

console.log(frutas);

frutas.shift() // vai remover o primeiro elemento

console.log(frutas)

// Iterar

// Esse for podemos acessar qualquer elemento individual do array

for (let i = 0; i <frutas.length; i++){
    let frutasLoop = frutas[i]

    console.log(`minha fruta preferida é ${frutasLoop}`)
}

console.log(frutas[0])

// Exercicios 06

// EX01
 let coresLista = ["Azul", "Vermelho", "Preto"]
 coresLista.push("Amarelo")
console.log(coresLista)

// EX02
let listaDeCompra = ["Papel", "Aguá sanitaria", "leite", "Carne"]
for (let i = 0; i <listaDeCompra.length; i++){
    let listaDCLoop = listaDeCompra[i]

    console.log(`${listaDCLoop}`);
}

// EX03
let numberL = [10, 20, 30, 40, 50];

let ultimosDois = numberL.slice(-2);

console.log(ultimosDois);

// EX04
let tarefas = ["lavar banheiro", "lavar louça", "fazer comida"];

tarefas.shift();

console.log(tarefas);

// Ex05
let lista = ["A", "B", "C"];
lista.splice(1, 1, "Y");
console.log(lista);  // Saída: ["A", "Y", "C"]

// EX06
let palavras = ["Olá", "Mundo", "!"];
let frases = palavras.join(" ");
console.log(frases);