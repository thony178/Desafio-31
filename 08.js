// Aula 08 - matrizes

// Matriz é um array de array, lista de lista.

let matriz = [[1, 2],[3, 4],[5, 6]]
console.log(matriz[0][1]) // o primeiro [] localiza qual lista, o segundo [] o item da lista que vc localizou
// console.log(matriz[][]) quando for assim não é necessario a virgula

let matriz1 = [
    [1, 2, 3], //= 0, [0, 1, 2]
    [4, 5, 6], //= 1, [0, 1, 2]
    [7, 8, 9]  //= 2, [0, 1, 2]
];
console.log(matriz1[1][2]) // saída = 6 // não pode colocar a , entre as caixas [][] = pode [],[] = não pode

// Iterando um matriz

let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz2.length; i++){
    let subArray = matriz2[i]
    for (let j = 0; j < subArray.length ; j++){
        console.log(matriz2[i][j]);
    }
}
// "i" vai pegar a lista matriz2 e o "j" vai pegar as listas dentro da matriz2

// Exercicios

// EX01
// exemplo 1
let matriz3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// exemplo 2
let linhas = 3;
let colunas = 3;
let matriz5 = [];

for (let i = 0; i < linhas; i++) {
  matriz5[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz5[i][j] = i + j;  // Exemplo: Soma dos índices
  }
}
console.log(matriz5);

// EX02
// Matriz precisa ser 3x3 minimo, pode ser 8x8, entre outros
let matrz = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
let somaM = 0;
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matrz[i].length; j++){
        somaM += matrz[i][j] 
    }
}
console.log(somaM)

// EX03
const tamanho = 8;
let tabuleiro = '';

for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
        if ((i + j) % 2 === 0) {
            tabuleiro += '⬜';
        } else {
            tabuleiro += '⬛';
        }
    }
    tabuleiro += '\n';
}

console.log(tabuleiro);

 // EX04
 function contarNumerosPares(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

// Testando a função com um exemplo de matriz
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = contarNumerosPares(numeros);
console.log("A quantidade de números pares é: " + resultado); // A quantidade de números pares é: 5

// EX05
function substituirValores(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            array[i] = 0;
        }
    }
    return array;
}

// Testando a função com um exemplo de matriz
let numeros2 = [5, 12, 8, 20, 3, 15, 10];
let resultado2 = substituirValores(numeros2);
console.log(resultado2); // [5, 0, 8, 0, 3, 0, 10]

// EX06
function multiplicarElementos(array, valor) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= valor;
    }
    return array;
}

// Testando a função com um exemplo de matriz e um valor fornecido
let numeros1 = [1, 2, 3, 4, 5];
let valorMultiplicador = 3;
let resultado1 = multiplicarElementos(numeros1, valorMultiplicador);
console.log(resultado1); // [3, 6, 9, 12, 15]
