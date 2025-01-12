// Aula 09 - recursão
// recursao é quando vc cria uma funsao que dentro dela mesma ela se chama ate que uma condição de parada seja atendida

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
