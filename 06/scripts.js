let result = prompt("Advinhe o número que estou pensando, está entre 0 e 10") //recebe o valor digitado pelo usuário

const randomNumber = Math.round(Math.random() * 10) // cria um número aleatório, o round arrendonda o número inserido pelo random, que está multiplicado por 10 para que possa ser gerado um número até 9.9, porem o round transforma em 10

let Attempts = 1 // variável para o número de tentativas, está em 1 porque não existe 0 tentativas

while(result != randomNumber) { // criação do loop enquanto o resultado da entrada do usuário for diferente do número aleatório, vai mostrar um outro prompt para solicitar uma nova tentativa
  result = prompt("Errado, tente novamente!") // o prompt altera o valor da variavel result, para que mude sua mensagem e solicite uma nova tentativa

  Attempts++ // aqui um incremento para que altere o valor da variável de tentativas enquanto não sair da condição
}

alert(`Parabéns, pensei no número ${randomNumber}, você acertou em ${Attempts} tentativas.`)// alert para quando sair da condição, mensagem interpolando o número aleatório e a quantidade de tentativas final