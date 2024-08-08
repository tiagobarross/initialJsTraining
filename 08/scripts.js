/*

Crie uma lista de pacientes
Cada paciente deve ter:
-nome
-idade
-peso
-altura

Escreva a lista contendo o nome dos pacientes*/

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

const patientName = []
const patientAge = []
const patientWeight = []
const patientHeight = []

for(let patient of patients){
  patientName.push(patient.name)
  patientAge.push(patient.age)
  patientWeight.push(patient.weight)
  patientHeight.push(patient.height)
}

alert(`O primeiro paciente é ${patientName[0]}, tem ${patientAge[0]} anos, pesa ${patientWeight[0]} quilos e mede ${patientHeight[0]} centímetros`)
alert(`O segundo paciente é ${patientName[1]}, tem ${patientAge[1]} anos, pesa ${patientWeight[1]} quilos e mede ${patientHeight[1]} centímetros`)
alert(`O terceiro paciente é ${patientName[2]}, tem ${patientAge[2]} anos, pesa ${patientWeight[2]} quilos e mede ${patientHeight[2]} centímetros`)