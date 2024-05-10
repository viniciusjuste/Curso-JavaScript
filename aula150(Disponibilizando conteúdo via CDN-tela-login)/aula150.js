import { Login } from "./login.js";

const callBack_Ok = () => {
    alert('Login efetuado com sucesso!')
}
const callBackNao_Ok = () => {
    alert('Login não efetuado, usuário e/ou senha inválidos.')
}

Login.login(callBack_Ok, callBackNao_Ok)