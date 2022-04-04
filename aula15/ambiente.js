let num = [5,8,2,9,3]
num.push(1) // inclusão no final do vetor
num.sort() //ordena os numero
console.log(num)
console.log('Quantas posições tem o vetor?')
console.log(`O vetor tem ${num.length} posições.`)
console.log('Qual é o primeiro valor do vetor?')
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}
console.log(`O valor 8 está na posição ${pos}`)