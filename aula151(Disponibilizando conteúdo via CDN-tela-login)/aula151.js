//import { Login } from "./login.js";

const callBack_Ok = () => {
    alert('Login efetuado com sucesso!')
}
const callBackNao_Ok = () => {
    alert('Login não efetuado, usuário e/ou senha inválidos.')
}
const configLogin = {
    cor:'white',
    img: 'imagens/logo.png',
    endpoint: 'https://442ca741-6778-4824-b927-bb4cf9e5d275-00-3hwznc1psu5ku.janeway.replit.dev'
}

Login.login(callBack_Ok, callBackNao_Ok, configLogin)