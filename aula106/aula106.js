let nome = new String('Bruno Pinho Campos 1978')
let email = 'bruno@bruno.com.br'
let numeros = '1, 10, 100, 1000'

// O modificador 'i' torna a pesquisa case-insensitive, ou seja, não diferencia maiúsculas de minúsculas.
console.log(nome.search(/pinho/i))

// O método match() retorna um array contendo as correspondências encontradas ou null se não houver correspondência.
// Esta linha procura na string 'nome' por todas as ocorrências do caractere 'o' de forma global (g) e case-insensitive (i).
console.log(nome.match(/o/ig))

console.log(nome.replace(/o/ig, 'Teste'))

// Retorna o 'o' e o 'h'.
console.log(nome.match(/[oh]/ig))

// Retorna tudo que ele encontrar de 'a' até 'n'.
console.log(nome.match(/[a-n]/ig))

console.log(nome.match(/[a-m|0-9]/ig))


            //Metacaracteres

// O '\d' retorna somente digitos.
console.log(nome.match(/\d/ig))

// O '\s' retorna somente espaços.
console.log(nome.match(/\s/ig))

// O '\b' retorna somente caracteres alfa-numéricos
console.log(nome.match(/\bP/ig))

           //quantificadores

console.log(nome.match(/o+/ig))

console.log(numeros)
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))
