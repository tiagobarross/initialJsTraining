/*Crie um código para solicitar dois números e no final mostrar a soma dos mesmos*/
alert("Olá, bem-vindo(a) ao Somador, gostaria de te conhecer melhor. :)")

let nome = prompt("Me diga seu nome:")

alert(`Muito bem ${nome}, vamos começar nossa soma!`)

function soma(){
  let numbeOne = prompt("Digite o primeiro número: ")
  let numberTwo = prompt("Digite o segundo número: ")

  return Number(numbeOne) + Number(numberTwo)
}

alert(`O resultado da soma dos números é: ${soma()}`)