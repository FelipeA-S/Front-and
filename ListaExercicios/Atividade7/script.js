const inputCartao = document.getElementById('input-cartao')
const btnAnalisar = document.getElementById('btn-analisar')

inputCartao.addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 16)
    v = v.replace(/(\d{4})(?=\d)/g, '$1 ')
    this.value = v
    inputCartao.classList.remove('valido', 'invalido')
    document.getElementById('painel').classList.remove('show')
})

btnAnalisar.addEventListener('click', analisar)

function analisar() {
    const numero = inputCartao.value.replace(/\D/g, '')

    if (numero.length < 13 || numero.length > 16) {
        alert('O número deve ter entre 13 e 16 dígitos.')
        return
    }

    const valido = luhn(numero)

    inputCartao.classList.toggle('valido', valido)
    inputCartao.classList.toggle('invalido', !valido)

    const badge = document.getElementById('status-badge')
    badge.className = 'status-badge ' + (valido ? 'valido' : 'invalido')
    document.getElementById('status-texto').innerText = valido ? 'Cartão Válido' : 'Cartão Inválido'

    document.getElementById('info-bandeira').innerText = detectarBandeira(numero)
    document.getElementById('info-setor').innerText = detectarSetor(numero[0])
    document.getElementById('info-banco').innerText = detectarBanco(numero)
    document.getElementById('info-iin').innerText = numero.slice(0, 8)

    document.getElementById('painel').classList.add('show')
}

function luhn(numero) {
    const digits = numero.split('').reverse().map(Number)
    let soma = 0
    for (let i = 0; i < digits.length; i++) {
        let d = digits[i]
        if (i % 2 !== 0) {
            d *= 2
            if (d > 9) d -= 9
        }
        soma += d
    }
    return soma % 10 === 0
}

function detectarBandeira(n) {
    if (/^4/.test(n)) return 'Visa'
    if (/^5[1-5]/.test(n)) return 'Mastercard'
    if (/^3[47]/.test(n)) return 'American Express'
    if (/^6(?:011|5)/.test(n)) return 'Discover'
    if (/^(?:2131|1800|35\d{3})/.test(n)) return 'JCB'
    if (/^(?:300-305|36|38)/.test(n)) return 'Diners Club'
    if (/^(606282|3841)/.test(n)) return 'Hipercard'
    if (/^4011|438935|45763|45764|431274|636368/.test(n)) return 'Elo'
    return 'Desconhecida'
}

function detectarSetor(d) {
    const setores = {
        '1': 'Companhias Aéreas',
        '2': 'Companhias Aéreas e outros',
        '3': 'Viagens e Entretenimento',
        '4': 'Bancário e Financeiro',
        '5': 'Bancário e Financeiro',
        '6': 'Comercial e Bancário',
        '7': 'Petróleo e Combustíveis',
        '8': 'Saúde e Telecomunicações',
        '9': 'Governo e Nacional'
    }
    return setores[d] || 'Desconhecido'
}

function detectarBanco(n) {
    if (/^4111/.test(n)) return 'Visa Test Bank'
    if (/^4012/.test(n)) return 'Banco do Brasil'
    if (/^4389/.test(n)) return 'Itaú Unibanco'
    if (/^5162/.test(n)) return 'Nubank'
    if (/^5276/.test(n)) return 'Bradesco'
    if (/^5067/.test(n)) return 'Caixa Econômica'
    if (/^3742/.test(n)) return 'American Express BR'
    if (/^6062/.test(n)) return 'Hipercard / Itaú'
    return 'Emissor não identificado'
}