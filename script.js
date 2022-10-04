let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')

let sum = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let multi = Number(numberOne) * Number(numberTwo)
let divi = Number(numberOne) / Number(numberTwo)
let rest = Number(numberOne) % Number(numberTwo)

if (numberOne == numberTwo) {
  alert('Os números digitados são iguais.')
} else {
  alert('Os números digitados são diferentes.')
}

alert('A soma dos dois números é: ' + sum)
if (sum % 2 == 0) {
  alert('O valor da soma é par.')
} else {
  alert('O valor da soma é impar.')
}

alert('A subtração dos dois números é: ' + sub)
alert('A multiplicação dos dois números é :' + multi)
alert('A divisão dos dois números é: ' + divi.toFixed(2))
alert('O resto da divisão dos dois números é: ' + rest.toFixed(2))
