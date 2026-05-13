const resultado = document.getElementById('resultado')
const titulo = document.getElementById('resultado-titulo')
const detalhe = document.getElementById('resultado-detalhe')

function calcularMedia(){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nome = document.getElementById('nome').value || 'ALUNO'

    const media = (nota1 + nota2 + nota3) / 3
    const mediaF = media.toFixed(2)
    resultado.className = 'resultado show'

    if(media >= 7.0){
        resultado.classList.add('aprovado')
        titulo.innerText = `${nome} -- APROVADO`
        detalhe.innerText = `Média: ${mediaF}`
    }else if(media >= 4.0 && media <=6.9){
        resultado.classList.add('exame')
        titulo.innerText = `${nome} -- EXAME`
        detalhe.innerText = `Média: ${mediaF} | Faltou: ${(10 - media).toFixed(2)} pontos`
    }else{
        resultado.classList.add('reprovado')
        titulo.innerText = `${nome} -- REPROVADO`
        detalhe.innerText = `Média: ${mediaF}`
    }
}