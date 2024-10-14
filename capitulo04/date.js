//meses começam do zero 

const dataAniversario = new Date (2020, 0, 20)
console.log(dataAniversario)

const primeiraDataJS = new Date(0)
console.log(primeiraDataJS)


const hoje = new Date()
//console.log(hoje.toString())
//console.log(hoje.toLocaleDateString())

//formato global recomendado
console.log(hoje.toISOString())


const dia = hoje.getDate()
hoje.setDate(dia + 5)
hoje.setHours(10, 30, 0)
console.log(hoje)


console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Secundes: ${hoje.getSeconds()}

`)
