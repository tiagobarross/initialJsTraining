/*Capture 2 números e faça a soma, subtração, multiplicação, divisão e resto da divisão com eles. Mostrar o resultado de cada um na tela */

let firstNumber = Number(prompt("Digite o primeiro número: "))
let secondNumber = Number(prompt("Digite o segundo número: "))

function sum(){
  return firstNumber + secondNumber
}

function sub(){
  return firstNumber - secondNumber
}

function multi(){
  return firstNumber * secondNumber
}

function div(){
  return firstNumber / secondNumber
}

function rest(){
  return firstNumber % secondNumber
}

alert(`O resultado da soma é: ${sum()}`)
alert(`O resultado da subtração é: ${sub()}`)
alert(`O resultado da multiplicação é: ${multi()}`)
alert(`O resultado da divisão é: ${div()}`)
alert(`O resultado do resto da divisão é ${rest()}`)