/*
Dada a lista de pacientes, descubra o IMC de cada paciente  e imprima:
"Paciente X possui o IMC de: Y"
Onde X é o nome do paciente e Y é o resultado do IMC
Crie uma função para fazer o cálculo do IMC
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 30,
    weight: 68,
    height: 171,
  },
  {
    name: "Tiago",
    age: 21,
    weight: 81,
    height: 170,
  },
]

function printPatientIMC(patient){
  return `Paciente ${patient.name} possui o IMC de: ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}`
}

for(let patient of patients){
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}