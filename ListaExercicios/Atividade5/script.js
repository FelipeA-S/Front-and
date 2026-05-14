const inputNome = document.getElementById('input-nome')
const lista = document.getElementById('guest-list')
const emptyState = document.getElementById('empty-state')
const counter = document.getElementById('counter')

function addConvidado() {
    const nome = inputNome.value.trim()
    if (!nome) return

    emptyState.style.display = 'none'

    const li = document.createElement('li')
    li.innerHTML = `
        <span class="guest-name">${nome}</span>
        <div class="actions">
            <button class="btn-action btn-concluir" onclick="concluir(this)">✓ Concluir</button>
            <button class="btn-action btn-editar"   onclick="editar(this)">✎ Editar</button>
            <button class="btn-action btn-excluir"  onclick="excluir(this)">✕ Excluir</button>
        </div>
    `

    lista.appendChild(li)
    inputNome.value = ''
    atualizarCounter()
}

function concluir(btn) {
    const li = btn.parentElement.parentElement
    li.classList.toggle('concluido')
}

function editar(btn) {
    const li = btn.parentElement.parentElement
    const span = li.querySelector('.guest-name')
    const novoNome = prompt('Editar convidado:', span.innerText)
    if (novoNome !== null && novoNome.trim() !== '') {
        span.innerText = novoNome.trim()
    }
}

function excluir(btn) {
    const li = btn.parentElement.parentElement
    li.remove()
    atualizarCounter()
    if (lista.querySelectorAll('li:not(#empty-state)').length === 0) {
        emptyState.style.display = ''
    }
}

function atualizarCounter() {
    counter.innerText = lista.querySelectorAll('li:not(#empty-state)').length
}