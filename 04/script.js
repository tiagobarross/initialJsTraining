/* Solicitar o nome do aluno e as 3 notas do bimestre, em seguida calcular a média do aluno

se o aluno for aprovado, mostrar a mensagem de parabéns, caso não seja, mensagem de recuperação.

em ambos os casos mostre a mensagem com o nome do aluno e a nota*/

let nome = prompt("Digite seu nome:")
let firstNote = parseFloat(prompt("Digite a primeira nota: "))
let secondNote = parseFloat(prompt("Digite a segunda nota: "))
let thirdNote = parseFloat(prompt("Digite a terceira nota: "))

function average(){
  let average = (firstNote + secondNote + thirdNote) / 3
  return average.toFixed(1)
}

if(average() >= 6.0){
  alert(`Parabéns ${nome}, sua média foi: ${average()}, você foi aprovado!`)
}

else{
  alert(`Você precisa melhorar ${nome}, sua média foi: ${average()}, estude mais um pouco!`)
}