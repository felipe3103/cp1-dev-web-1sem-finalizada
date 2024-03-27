//Autor: Felipe do Nascimento Fernandes
//https://github.com/felipe3103
//exercicio 1

//indefinida


let nome;
console.log(nome)


//vazia

let disciplina = null;
console.log(disciplina)


//com valor

let aluno = "Aluninho";
console.log(aluno)

//exercicio 2
/*
== (igualdade)
!=  (desiguldade)
>= (maior ou igual)
*/
//==

if (8 == 8) {
    document.write("true")
}
else {
    document.write("false")
}
document.write("<br>")
//!=

if (2 != 3) {
    document.write("true")
}
else {
    document.write("false")
}
document.write("<br>")

//>=

if (9 >= 8) {
    document.write("true")
}
else {
    document.write("false")
}
document.write("<br>")

//exercicio 3 

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "no peso ideal";
    } else {
        return "acima do peso";
    }
}

function main() {
    // Obter peso e altura do usuário (em kg e metros, respectivamente)
    const peso = parseFloat(prompt("Digite seu peso em kg:"));
    const altura = parseFloat(prompt("Digite sua altura em metros:"));

    // Calcular IMC
    const imc = calcularIMC(peso, altura);

    // Classificar IMC e exibir mensagem
    const classificacao = classificarIMC(imc);
    console.log(`Seu IMC é ${imc.toFixed(2)} - Você está ${classificacao}.`);
}

// Executar o programa
main();