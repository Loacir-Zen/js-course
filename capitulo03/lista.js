const minhaLista = []

const minhaListaDeTarefas = [
    'mandar emails',
    'reponder emails',
    'fazer vídeos para o canal',
    'colocar comida para o dog',
    'limpar o quarto',
] 

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[4])

//ver a quantidade de itens no array
console.log(minhaListaDeTarefas.length)

//adicionar item
minhaListaDeTarefas.push('Formatar o computador')
console.log(minhaListaDeTarefas);


//como remover o ultimo da lista 
const ultimo = minhaListaDeTarefas.pop()
console.log(ultimo,minhaListaDeTarefas)


//remover o primeiro item da lista 
const primeiro = minhaListaDeTarefas.shift()
console.log(primeiro, minhaListaDeTarefas)


//remover um item específico a partir do índice
console.log(minhaListaDeTarefas);
console.log(minhaListaDeTarefas[2])
minhaListaDeTarefas.splice(2,1)
console.log(minhaListaDeTarefas);

console.log("\n ----------------------------------- \n")

//criar uma lista de diversos valores

const itens = [
    1, 'computador', 0.22
]

console.log(typeof(itens))

//verificar o array da forma correta 

console.log(Array.isArray(itens))


//ordenar 
const numero = [5,4,2,1,3,0]
console.log(numero.sort())


//juntar dois arrays 

const novo = itens.concat([1,2,3])
console.log(novo)



//juntar arrays em uma só string 
console.log(itens.join(','))


//verificar indece do item 
const index = itens.indexOf('computador')
console.log(index)