const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click', (evt) => {
    let estadoValidacao = f_nota.validity

    if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity('Nossa, que nota alta você digitou!!')
       // msg = f_nota.validationMessage
    }

    f_nota.reportValidity()
    //f_msg.innerHTML = f_nota.validationMessage
    // Não executa o 'submit' do botão
    evt.preventDefault()
})