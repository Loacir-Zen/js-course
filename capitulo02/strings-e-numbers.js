let salarioFulano = 2000
let salarioBeltrano = "2900.14"
let salarioBeltranoCorrigido = Number(salarioBeltrano)

console.log (salarioBeltranoCorrigido + salarioFulano)

console.log(typeof(salarioFulano),salarioFulano)

console.log(typeof(salarioBeltrano), salarioBeltrano)

console.log(typeof(salarioBeltranoCorrigido), salarioBeltranoCorrigido)

console.log(isNaN(salarioBeltrano))

let minhaString = 'Olá'
let minhaOutraString = "Olá novamente"
let minhaStringComValores = `
    ${minhaString} - ${minhaOutraString}. AE!

`

console.log(minhaStringComValores)