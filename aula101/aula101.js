let nome = new String('Bruno')
let nome1 = new String('Vinicius')
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
console.log(nome1.lastIndexOf('i'))