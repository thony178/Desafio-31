// Dia 2 - Condições

// if, else if e else

const hora = 14;

if (hora < 12) {
    console.log("Bom dia")
} else if (hora < 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}

// Switch case

let diaSemana = 2;

switch (diaSemana) {
    case 1: 
        console.log("Segunda-feira");
        break
    case 2:
        console.log("Terça-feira");
        break
    case 3:
        console.log("Quarta-feira");
        break
    case 4:
        console.log("Quinta-feira");
        break
    case 5:
        console.log("Sexta-feira");
        break
    case 6:
        console.log("Sábado");
        break
    case 7:
        console.log("Domingo");
        break
    default:
        console.log("Dia inválido");
}

// Exercícios de fixação.

    // 1

let hora1 = 14;

if (hora1 < 12) {
    console.log("Bom dia")
} else if (hora1 < 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}

    // 2

    let diaMes = 4;

switch (diaMes) {
    case 1:
        console.log("Janeiro");
        break
    case 2:
        console.log("Fevereiro");
        break
    case 3:    
        console.log("Março")
        break
    case 4:
        console.log("Abril");
        break
    case 5:
        console.log("Maio");
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho");
        break
    default:
        console.log("Mês inválido");
}

    // 3   

let idade = 19;

if (idade <18) {
    console.log("Não pode dirigir")
} else if (idade >= 18) {
    console.log("Pode dirigir")
} else {
    console.log("pode dirigir")
}

    // 3 - Desafio Extra Plus

 let Idade = 18;
 let PossueCNH = true;

 if (Idade >= 18 && PossueCNH) {
    console.log("Pode dirigir")
 } else {
    console.log("Não pode dirigir")
 }

    // 4 

 let saldoConta = 1000.00;

 if (saldoConta > 0) {
    console.log("Saldo positivo")
 } else if (saldoConta < 0) {
    console.log("Saldo negativo")
 } else {
    console.log("Saldo zerado")
 }

    // 5

 let Number = -10;

 if (Number > 0) {
    console.log("Positivo")
 } else if (Number < 0) {
    console.log("Negativo")
 } else {
    console.log("Zero")
 }

    // 6

    let Saldo = 1000.00;
    let opcao = 2;
    let valor = 50.00;

    switch (opcao) {
        case 1:
            console.log("Sacar");
            break
        case 2:
            console.log("Depositar");
            break
        case 3:
            console.log("Saldo");
            break
        default:
            console.log("Opção inválida");
    }

    if (opcao === 1) {
        console.log("você escolheu a opção 1 (Sacar)");
        console.log("Você sacou R$", (valor));
        console.log("Seu saldo é de R$" + (Saldo - valor));
    } else if (opcao === 2) {
        console.log("Você escolheu a opção 2 (Depositar)");
        console.log("Você depositou R$", valor);
        console.log("Seu saldo é de R$" + (Saldo - valor));
    } else if (opcao === 3) {
        console.log("Você escolheu a opção 3 (Saldo)");
        console.log("Seu saldo é de R$" + Saldo);
    } else {
        console.log("Opção inválida, tente novamente. Com essas opções: 1(Sacar), 2(Depositar) ou 3(Saldo)");
    }



    // 6 desafio extra plus com IA

    let saldo = 1000; // Saldo inicial

function mostrarMenu() {
    console.log('\n=== CAIXA ELETRÔNICO ===');
    console.log('1 - Sacar');
    console.log('2 - Depositar');
    console.log('3 - Saldo');
    console.log('4 - Sair');
}

function processarOpcao(opcao) {
    switch(opcao) {
        case '1':
            readline.question('Digite o valor para saque: R$ ', (valor) => {
                const saque = parseFloat(valor);
                if (saque <= saldo && saque > 0) {
                    saldo -= saque;
                    console.log(`Saque de R$ ${saque.toFixed(2)} realizado com sucesso!`);
                } else {
                    console.log('Saldo insuficiente ou valor inválido!');
                }
                continuarOperacao();
            });
            break;

        case '2':
            readline.question('Digite o valor para depósito: R$ ', (valor) => {
                const deposito = parseFloat(valor);
                if (deposito > 0) {
                    saldo += deposito;
                    console.log(`Depósito de R$ ${deposito.toFixed(2)} realizado com sucesso!`);
                } else {
                    console.log('Valor inválido para depósito!');
                }
                continuarOperacao();
            });
            break;

        case '3':
            console.log(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);
            continuarOperacao();
            break;

        case '4':
            console.log('Obrigado por usar nossos serviços!');
            readline.close();
            break;

        default:
            console.log('Opção inválida!');
            continuarOperacao();
    }
}

function continuarOperacao() {
    mostrarMenu();
    readline.question('\nEscolha uma opção: ', processarOpcao);
}

mostrarMenu();
readline.question('\nEscolha uma opção: ', processarOpcao);
