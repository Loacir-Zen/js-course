const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

console.log ('nome', heroi.nome)
console.log('idade', heroi['idade'])
console.log('sexo', heroi.sexo)


heroi.id = 1;
console.log(heroi)


//pegar apenas as chaves dos objetos 
console.log(Object.keys(heroi))


//pegar apenas os valores
console.log(Object.values(heroi))


//juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, pessoa)
console.log(novoObj)


//deletar umas chave 
delete novoObj.nome
console.log(novoObj)


