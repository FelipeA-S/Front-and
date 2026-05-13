const parcelasBtns = document.querySelectorAll('.parcela-btn');
const inputParcelas = document.getElementById('parcelas');

parcelasBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        parcelasBtns.forEach(b => b.classList.remove('ativo'));
        this.classList.add('ativo');
        inputParcelas.value = this.dataset.parcela;
    });
});

function calcularParcela() {
    const bandeira = document.getElementById('bandeira').value
    const valor = Number(document.getElementById('valor').value)
    const parcelas = Number(document.getElementById('parcelas').value)
    const resultado = document.getElementById('resultado')

    let taxaBandeira
    switch (bandeira) {
        case 'visa':
            taxaBandeira = 0.02
            break
        case 'master':
            taxaBandeira = 0.0185
            break
        case 'elo':
            taxaBandeira = 0.03
            break
    }
    const valorTaxa   = valor * taxaBandeira
    const valorJuros  = valor * (0.0035 * parcelas)
    const valorMensal = 12.50 * parcelas
    const valorTotal  = valor + valorTaxa + valorJuros + valorMensal
    const valorParcela = valorTotal / parcelas

    resultado.classList.add('show')

    document.getElementById('res-venda').innerText   = `R$ ${valor.toFixed(2)}`
    document.getElementById('res-taxa').innerText    = `R$ ${valorTaxa.toFixed(2)}`
    document.getElementById('res-juros').innerText   = `R$ ${valorJuros.toFixed(2)}`
    document.getElementById('res-mensal').innerText  = `R$ ${valorMensal.toFixed(2)}`
    document.getElementById('res-parcela').innerText = `R$ ${valorParcela.toFixed(2)}`
}