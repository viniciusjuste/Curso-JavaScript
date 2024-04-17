let nome = new String('Bruno')
let nome2 = new String('Bruno')
let vinicius = new String('Vinicius Teixeira Juste')
let canal = new String('CFB Cursos')
let espacoVazio = new String(' ')

// Retorna o caracter do índice escolhido.
console.log(nome.charAt(2))

// Retorna o código do caracter do índice escohido.
console.log(nome.charCodeAt(2))

// Concatena a string 'nome' com a string 'canal'.
// nome = nome.concat(espacoVazio,canal)
console.log(nome.concat(espacoVazio, canal))

// Retorna a posição do caracter que eu passar.
console.log(nome.indexOf('B'))

// Retorna a posição do último caracter que eu passar.
console.log(vinicius.lastIndexOf('i'))

// Faz comparação entre objetos string, se eles forem iguais retorna 0, se não retorna 1.
console.log(nome.localeCompare(nome2))

// Substitui o caracter que eu indicar pelo outro que eu passar, por exemplo abaixo: vai substituir onde tiver 'B' por 'P'.
console.log(nome.replace('B', 'P'))

// Faz pesquisa dentro da minha string, retorna a posição do primeiro caracter que eu passar
console.log(nome.search('o'))

// Este código imprime os três primeiros caracteres da string 'nome' no console.
console.log(nome.slice(0,3));

// Divide a string 'vinicius' em substrings com base nos espaços em branco e armazena essas substrings em um array chamado 'array_nome'.
let array_nome = vinicius.split(' ');

// Imprime o array 'array_nome' no console.
console.log(array_nome);

