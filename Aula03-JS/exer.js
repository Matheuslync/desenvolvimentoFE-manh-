// declara uma variavel com a sua idade, verificar o tipo dela
const idade = 37
// console.log(idade, typeof idade)

// declara uma variavel com a sua comida preferida e atribuir um valor depois da declaração
var comida_fav
comida_fav = "sushi"

//neste caso, vc so esta printando 2 coisas diferentes, :(
// console.log("minha lalalalalala", comida_fav)
// concatenando as string :)
// console.log("minha lalalalalala " + comida_fav)
// porem usando template string :)
// console.log(`minha lalalalalala ${comida_fav}`)


// Declarar uma variavel e nao dar valor pra ela, sendo undefined
var comida
let hobby
const carro = undefined


// Declarar 5 variaveis diferentes sem valores
var a,b,c,d,e

// Declarar uma variavel contendo uma string
var animal = "zebra"

// Declare uma varivel contendo um numero dentro de uma string
let numeroComoString = "5"
let numeroComoString2 = '5'
const numeroComoString3 = `5 - ${animal}` //curirosidade

// Declare uma variavel com seu nome, e outra com sobrenome, e concatene os dois, depois faça um template string dos 2
// var nome, sobrenome
// nome = "André"
// sobrenome = "Dias"

let nome = "andre ferreira pinto dias"
var sobrenome = "dias"
const concatenado = "Meu nome é" + " " + nome + " " + "estou ingressando nas aulas de frontend"
var templatetring = `meu nome é ${nome}, estou ingressando nas aulas...`


// Coloque a seguinte frase em uma variavel: It´s time

var frase = "it´s time"

// verifique o tipo de todas as variaveis criadas

console.log(typeof frase, typeof nome, typeof a, typeof idade)


// console.log(frase)


// console.warn("b")
// console.error("c")
