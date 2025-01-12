// Aula 10 - Classes e objetos

// Uma classes é um molde para poder construir objetos

// PascalCase: Cada palavra começa com uma letra maiúscula, incluindo a primeira palavra. Exemplo: MeuNome

// camelCase: A primeira palavra começa com uma letra minúscula, e todas as palavras 
// subsequentes começam com uma letra maiúscula. Exemplo: meuNome

// metodos são funções dentro de uma classe e elas pode ser chamadas, mas elas sempre esteram dentro do contesto dentro da classe

// Classe é tipo um molde. Exemplo a baixo
class Carro {
    constructor (marca, model, cor) {
        this.marca = marca
        this.model = model
        this.cor = cor
    }
    //metodo. exemplo a baixo
    aceleracao() {
        console.log(`${this.marca} ${this.model} está acelerando`)
    }
}

// O objeto é quando vc pega uma classe e colocar as caracteristicas nele. Exemplo a baixo
const carro1 = new Carro("Toyota", "Corolla", "Yellow")
carro1.aceleracao()

// Execicios

// EX01
class Livro {
    constructor (titulo, autor, ano) {
        this.titilo = titulo
        this.autor = autor
        this.ano = ano
    }

    informcoes() {
        console.log(`o Titulo do livro é ${this.titilo}, o autor é ${this.autor} e é do ano ${this.ano}, espero que goste do livro`);
    }
}

const livro1 = new Livro("Gálaxia", "Anthony", "1820")
livro1.informcoes()

// EX02 
class ContaBancaria {
    constructor() {
        this.Banco
        this.Conta
        this.Valor
    }

    depositar (){
        console.log(`senhor ${this.Conta}, você tem ${this.Valor} no banco ${this.Banco} em reais na sua conta. Deseja depositar quanto mesmo?`)
    }

    sacar (){
        console.log(`senhor ${this.Conta}, você tem ${this.Valor} no banco ${this.Banco} em reais na sua conta. Deseja sacar quanto mesmo?`)
    }
}
const conta1 = new ContaBancaria("Inter", "Anthony C.Z.", "1.503,55")
conta1.depositar()