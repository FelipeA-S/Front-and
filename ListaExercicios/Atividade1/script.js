const cpf = document.getElementById("cpf-input")
const botao = document.getElementById("btn-validar")

function validar(){
    const Cpf = cpf.value.replace(/\D/g, '')
    if(Cpf.length !== 11){ return }

    const proxDigito = (cpfIncompleto) =>{
        let somatoria = 0
        for (let i = 0; i< cpfIncompleto.length; i++) {
            let digitoAtual = cpfIncompleto.charAt(i)
            let constante = (cpfIncompleto.length +1 -i)
            somatoria += Number(digitoAtual) * constante
        };
        const resto = somatoria % 11;
        return resto < 2 ? "0" : (11 - resto).toString()
    }
    let primeiroValidador = proxDigito(Cpf.substring(0,9))
    let segundoValidador = proxDigito(Cpf.substring(0,9) + primeiroValidador)
    let cpfCompleto = Cpf.substring(0,9) +primeiroValidador +segundoValidador

    if(Cpf == cpfCompleto){
        botao.classList.add('verde')
    }else{
        botao.classList.add('vermelho')
    }
}