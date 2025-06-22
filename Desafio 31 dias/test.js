let dev = "Um dia chego lá!!!";
const devJ = "1% todo dia eu chego lá";

    let saldo = 1000.00;
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
        console.log("Seu saldo é de R$" + (saldo - valor));
    } else if (opcao === 2) {
        console.log("Você escolheu a opção 2 (Depositar)");
        console.log("Você depositou R$", valor);
        console.log("Seu saldo é de R$" + (saldo - valor));
    } else if (opcao === 3) {
        console.log("Você escolheu a opção 3 (Saldo)");
        console.log("Seu saldo é de R$" + saldo);
    } else {
        console.log("Opção inválida, tente novamente. Com essas opções: 1(Sacar), 2(Depositar) ou 3(Saldo)");
    }