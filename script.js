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

//Autor: João Victor Soave
//https://github.com/siigAprendiz
// Exercíco 4

let idade = parseInt(prompt("Digite sua idade: "));

if (idade < 0) {
    alert("Idade inválida");
} else if (idade <= 12) {
    alert("Criança!");
} else if (idade <= 18) {
    alert("Adolescente!");
} else if (idade <= 60) {
    alert("Adulto!");
} else {
    alert("Idoso!");
}

//Exercício 5

let usernameCad = "admin";
let passwordCad = "1234";
let username = prompt("Digite seu nome de usuário: ");
let password = prompt("Digite sua senha: ")

if (username == usernameCad && password == passwordCad) {
    alert("Login realizado com sucesso!");
} else {
    alert("Falha na Autenticação")
}

//Autor:Gustavo Henrique Martins
//exercicio 6
function calcularMedia(notas) {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    var media = soma / notas.length;
    return media;
}

function verificarAprovacao(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

var notas = [7, 8, 6, 9, 5, 6, 7];
var media = calcularMedia(notas);
var status = verificarAprovacao(media);

console.log("Notas do aluno: " + notas.join(", "));
console.log("Média: " + media.toFixed(2));
console.log("Status: " + status);

//exercicio 7
let nome7;
let idade2;
let curso;
let ano;

function PegaDados() {
    // Obter dados 
    const nome7 = prompt("Digite seu nome:");
    const idade2 = prompt("Digite sua idade:");
    const curso = prompt("Digite seu curso")
    const ano = prompt("Digite o ano:");

    // Imprime nome, idade e curso
    console.log("Seu nome é: " + nome7);
    console.log("Sua idade é: " + idade2);
    console.log("Seu curso é: " + curso);
    console.log("Seu ano é: " + ano);

    document.write("Seu nome é: " + nome7);
    document.write("<br>")
    document.write("Sua idade é: " + idade2);
    document.write("<br>")
    document.write("Seu curso é: " + curso);
    document.write("<br>")
    document.write("Seu ano é: " + ano);
}

// Executar o programa
PegaDados();

//Autor:Henrique Ignacio
//https://github.com/henriqueignacio
//exercicio 8
//Busque a primeira posição de “em”
let texto = "Tecnologia é um produto da ciêcia e da engenharia que envolve um conjunto de instrumento, métodos e técnicas que visam a resolução de problemas"
console.log(texto.indexOf("em"));

//Busque a última posição de “ia”
let texto1 = "Tecnologia é um produto da ciêcia e da engenharia que envolve um conjunto de instrumento, métodos e técnicas que visam a resolução de problemas"
console.log(texto1.lastIndexOf("ia"));

//Busque a palavra ciência
let texto2 = "Tecnologia é um produto da ciêcia e da engenharia que envolve um conjunto de instrumento, métodos e técnicas que visam a resolução de problemas"
console.log(texto2.slice(27,34));

//Busque a palavra métodos
let texto3 = "Tecnologia é um produto da ciêcia e da engenharia que envolve um conjunto de instrumento, métodos e técnicas que visam a resolução de problemas"
console.log(texto3.slice(90,97));
