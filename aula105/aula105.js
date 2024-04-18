let nome = new String('Bruno Pinho Campos')

// O modificador 'i' torna a pesquisa case-insensitive, ou seja, não diferencia maiúsculas de minúsculas.
console.log(nome.search(/pinho/i))

// O método match() retorna um array contendo as correspondências encontradas ou null se não houver correspondência.
// Esta linha procura na string 'nome' por todas as ocorrências do caractere 'o' de forma global (g) e case-insensitive (i).
console.log(nome.match(/o/ig))

console.log(nome.replace(/o/ig, 'Teste'))

