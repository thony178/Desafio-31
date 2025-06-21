// Desafio 1 (Este é um desafio diario que eu irei usar a IA para
//  me fazer alguns desafios alem do que tem no Desafio 31 dias)

// Desafio Extra 1: Conversor de Temperatura

const Temperatura = 25;
const unidadeEntrada = ""; // Pode ser "C" para Celsius ou "F" para Fahrenheit "K" para kelvin
const unidadeSaida = ""; // Pode ser "C" para Celsius ou "F" para Fahrenheit "K" para kelvin

let resultado;

let tempCelsius;
if (unidadeEntrada === "C") {
    tempCelsius = Temperatura;
} else if (unidadeEntrada === "F") {
    tempCelsius = (Temperatura - 32) * 5/9;
} else if (unidadeEntrada === "K") {
    tempCelsius = Temperatura - 273.15;
}

if (unidadeSaida === "C") {
    resultado = tempCelsius;
} else if (unidadeSaida === "F") {
    resultado = (tempCelsius * 9/5) + 32;
} else if (unidadeSaida === "K") {
    resultado = tempCelsius + 273.15;
}

console.log(`${Temperatura} ${unidadeEntrada} é igual a ${resultado} ${unidadeSaida}`);