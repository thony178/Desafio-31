// Aula 11 - Encapsulamento e Abstração

// Encapsulamneto é como privar algumas informações de classes e objetos.
// Exemplo: Como se fosse criar uma cofre onde só vc sabe a senha isso é encapsulamento.

class Confre {
    #senha // # serve para privar

    constructor (senhaInicial) {
        this.#senha = senhaInicial
    }

    verificarSenha(senha){
        return senha === this.#senha
    }
}
const cofre1 = new Confre(`123`)
console.log(cofre1.verificarSenha(`1234`))

// Encapsulamento: Controla como os dados de um objeto são acessados e modificados, protegendo sua integridade.
// Abstração: Esconde detalhes desnecessários do funcionamento interno e expõe apenas o que é essencial para o uso.

// Encapsule Sempre que Possível:**
    //Proteja os dados sensíveis e forneça métodos específicos para acessá-los.

//Mantenha Simples:**
    //Use a abstração para esconder detalhes irrelevantes e expor apenas o que importa.

// Exercicios

// Ex01
class Conta {
    #saldo;
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    depositar(valor) {
      this.#saldo += valor;
    }
  
    consultarSaldo() {
      return this.#saldo;
    }
  }
  
  const minhaConta = new Conta(1000);
  minhaConta.depositar(500);
  console.log(minhaConta.consultarSaldo()); // Saída: 1500

// EX02
class Usuario {
    #senha;
  
    constructor(senhaInicial) {
      this.#senha = senhaInicial;
    }
  
    alterarSenha(senhaAtual, novaSenha) {
      if (senhaAtual === this.#senha) {
        this.#senha = novaSenha;
        console.log("Senha alterada com sucesso!");
      } else {
        console.log("Senha atual incorreta!");
      }
    }
  }
  
  const usuario = new Usuario("1234");
  usuario.alterarSenha("1234", "abcd");  // Saída: Senha alterada com sucesso!
  usuario.alterarSenha("1234", "efgh");  // Saída: Senha atual incorreta!

// EX03
class ControleRemoto {
    #estado;

    constructor() {
        this.#estado = false; // TV está desligada inicialmente
    }

    ligar() {
        if (!this.#estado) {
            this.#estado = true;
            console.log("A TV está ligada.");
        } else {
            console.log("A TV já está ligada.");
        }
    }

    desligar() {
        if (this.#estado) {
            this.#estado = false;
            console.log("A TV está desligada.");
        } else {
            console.log("A TV já está desligada.");
        }
    }

    // Método privado para verificar o estado interno
    #verificarEstado() {
        return this.#estado ? "ligada" : "desligada";
    }
}

// Testando a classe ControleRemoto
let controle = new ControleRemoto();

controle.ligar();    // A TV está ligada.
controle.ligar();    // A TV já está ligada.
controle.desligar(); // A TV está desligada.
controle.desligar(); // A TV já está desligada.

// EX04
class Cofre {
    #valores;
    #senha;

    constructor(senha) {
        this.#valores = [];
        this.#senha = senha;
    }

    // Método para adicionar valor ao cofre, verificando a senha
    adicionarValor(valor, senha) {
        if (senha === this.#senha) {
            this.#valores.push(valor);
            console.log("Valor adicionado ao cofre.");
        } else {
            console.log("Senha incorreta. Acesso negado.");
        }
    }

    // Método para obter valores do cofre, verificando a senha
    obterValores(senha) {
        if (senha === this.#senha) {
            return this.#valores;
        } else {
            console.log("Senha incorreta. Acesso negado.");
            return null;
        }
    }

    // Método para mudar a senha, verificando a senha atual
    mudarSenha(senhaAntiga, novaSenha) {
        if (senhaAntiga === this.#senha) {
            this.#senha = novaSenha;
            console.log("Senha alterada com sucesso.");
        } else {
            console.log("Senha incorreta. Acesso negado.");
        }
    }
}

// Testando a classe Cofre
let meuCofre = new Cofre("minhaSenhaSecreta");

meuCofre.adicionarValor("Diamante", "minhaSenhaSecreta"); // Valor adicionado ao cofre.
meuCofre.adicionarValor("Ouro", "senhaErrada"); // Senha incorreta. Acesso negado.

console.log(meuCofre.obterValores("minhaSenhaSecreta")); // ["Diamante"]
console.log(meuCofre.obterValores("senhaErrada")); // Senha incorreta. Acesso negado. null

meuCofre.mudarSenha("minhaSenhaSecreta", "novaSenha"); // Senha alterada com sucesso.
meuCofre.adicionarValor("Prata", "novaSenha"); // Valor adicionado ao cofre.
console.log(meuCofre.obterValores("novaSenha")); // ["Diamante", "Prata"]

// EX05
class CarrinhoDeCompras {
    #itens;

    constructor() {
        this.#itens = [];
    }

    // Método para adicionar item ao carrinho
    adicionarItem(item) {
        this.#itens.push(item);
        console.log(`Item '${item}' adicionado ao carrinho.`);
    }

    // Método para remover item do carrinho
    removerItem(item) {
        const index = this.#itens.indexOf(item);
        if (index !== -1) {
            this.#itens.splice(index, 1);
            console.log(`Item '${item}' removido do carrinho.`);
        } else {
            console.log(`Item '${item}' não encontrado no carrinho.`);
        }
    }

    // Método para listar todos os itens no carrinho
    listarItens() {
        if (this.#itens.length > 0) {
            console.log("Itens no carrinho:");
            this.#itens.forEach(item => console.log(item));
        } else {
            console.log("O carrinho está vazio.");
        }
    }
}

// Testando a classe CarrinhoDeCompras
let meuCarrinho = new CarrinhoDeCompras();

meuCarrinho.adicionarItem("Maçã");     // Item 'Maçã' adicionado ao carrinho.
meuCarrinho.adicionarItem("Banana");   // Item 'Banana' adicionado ao carrinho.
meuCarrinho.listarItens();             // Itens no carrinho: Maçã, Banana

meuCarrinho.removerItem("Banana");     // Item 'Banana' removido do carrinho.
meuCarrinho.listarItens();             // Itens no carrinho: Maçã

meuCarrinho.removerItem("Laranja");    // Item 'Laranja' não encontrado no carrinho.
meuCarrinho.listarItens();             // Itens no carrinho: Maçã