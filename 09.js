// Aula 09 - recursão
// recursao é quando vc cria uma funsao que dentro dela mesma ela se chama ate que uma condição de parada seja atendida
// A recursão é uma técnica onde uma função se chama repetidamente até atingir uma condição que interrompa essa chamada.

function funsao() {
    funsao()
}

//* faça uma funsao que recebe um número e conta regressivamente
//* começando desse número e indo até o zero

function contagRegre(numero) {
    if (numero == 0) {
        console.log("fim")
        return
    }
    console.log(numero)
    contagRegre(numero - 1)
}

contagRegre(5)

// Exercícios

// EX01
 function contagem(n){
    if (n < 0){
        return;
    }
    console.log(n);

    contagem(n - 1);
}

contagem(5)

// EX02
function fatorial(n) {
    if (n === 0) return 1; // Caso base
    return n * fatorial(n - 1); // Chamada recursiva
  }
  
  console.log(fatorial(5)); // Saída: 120 (5 * 4 * 3 * 2 * 1)

  // EX03
  function somaAte(numero) {
    if (numero === 1) return 1; // Caso base
    return numero + somaAte(numero - 1); // Chamada recursiva
  }
  
  console.log(somaAte(5)); // Saída: 15 (5 + 4 + 3 + 2 + 1)

  // EX04
  function inverterString(str) {
    if (str === "") return ""; // Caso base
    return inverterString(str.slice(1)) + str[0]; // Chamada recursiva
  }
  
  console.log(inverterString("ada")); // Saída: "oãsruceR"

  // EX05
  function fibonacci(n) {
    if (n <= 1) return n; // Caso base
    return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
  }
  
  console.log(fibonacci(6)); // Saída: 8 (0, 1, 1, 2, 3, 5, 8)

  // EX06
  function listarArquivos(diretorio) {
    for (let item of diretorio) {
      if (Array.isArray(item)) {
        listarArquivos(item); // Chamada recursiva
      } else {
        console.log(item); // Arquivo
      }
    }
  }
  
  let arquivos = ["index.html", ["css", "style.css"], ["js", "script.js"]];
  listarArquivos(arquivos);
  // Saída:
  // index.html
  // css
  // style.css
  // js
  // script.js