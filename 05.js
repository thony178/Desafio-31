// Aula 05 - Loops

// loop - for = rodar ate o limete (i <= 20) terminar

// i = indece

for (let indice = 0; indice <= 20; indice++){
    console.log("numero", indice)
}

// While = enquanto ( ate a condição for verdadeira)

let contador = 0

while (contador <= 10){
    console.log("conatdor", contador)

    contador++
}


// Break e continue

// Break para onde o valor for setado no IF
for (let i = 0; i <= 10; i++){
    if (i == 5)break
    console.log("Top1",i);
}

// Continue pula o valor setado no IF
for (let i1 = 0; i1 <= 10; i1++){
    if (i1 == 5)continue
    console.log("Top2",i1);
}

// Exercicios

// EX01
for (let i2 = 0; i2 <= 10; i2++){
    console.log('numero', i2);
}

// EX02
let names = ["Anthony", "thony", "feat"]
for (let i3 = 0; i3 < names.length; i3++){
    console.log(names[i3]);
}

// EX03
let namesArray = ["anthony", "fernanda", "thony", "adofeat", "tommy"];
let buscarNames = "thony";
for (let i4 = 0; i4 < namesArray.length; i4++){
    if (namesArray[i4] === buscarNames){
        console.log(`Nome ${buscarNames}  encontardo na posição ${i4}`);
        break;
    }
}

// EX04
let contarTrasFrente = 10
while (contarTrasFrente >= 0 ){
    console.log(contarTrasFrente)
    if (contarTrasFrente == 0) console.log("lançamento")
    contarTrasFrente--
}

// EX05
let senha = 145;
do {
    if (senha == 145){
        console.log("senha correta")};
    senha--;
} while (senha == 145);

// EX06
let fatorial = 1;
let numero = 5;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`${numero}!: ${fatorial}`);