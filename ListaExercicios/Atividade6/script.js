function calcularOrcamento() {
    const pacote = Number(document.getElementById('pacote').value)
    const pessoas = Number(document.getElementById('pessoas').value)

    const custoBruto = pacote * pessoas
    const taxa = custoBruto * 0.10
    const subTotal = custoBruto + taxa

    const temDesconto = pessoas >= 100
    const desconto = temDesconto ? subTotal * 0.05 : 0
    const total = subTotal - desconto

    document.getElementById('resultado').classList.add('show')
    document.getElementById('badge-fidelidade').classList.toggle('show', temDesconto)
    document.getElementById('row-desconto').style.display = temDesconto ? 'flex' : 'none'

    document.getElementById('res-bruto').innerText = `R$ ${custoBruto.toFixed(2)}`
    document.getElementById('res-taxa').innerText = `R$ ${taxa.toFixed(2)}`
    document.getElementById('res-desconto').innerText = `- R$ ${desconto.toFixed(2)}`
    document.getElementById('res-total').innerText = `R$ ${total.toFixed(2)}`
}