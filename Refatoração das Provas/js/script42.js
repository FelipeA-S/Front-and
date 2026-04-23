function add() {
    if (document.getElementById('card-paqueta')) return;

    var container = document.getElementById('Cards');
    var novoCard = document.createElement('div');
    novoCard.id = 'card-paqueta';
    novoCard.className = 'card';
    novoCard.style.width = '22rem';
    novoCard.style.marginLeft = '20px';

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">
        <div class="card-body">
            <h5 class="card-title">
                <span class="card-title">Lucas Paquetá</span>
                <span class="badge text-bg-success">8,8</span>
            </h5>
            <p class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997</span><br>
                <span><strong>Altura:</strong> 1,80 m</span><br>
                <span><strong>Posição:</strong> Meio-campista</span><br>
            </p>
        </div>
    `;

    container.appendChild(novoCard);

    var btn = document.querySelector('[onclick="add()"]');
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-secondary');
    btn.textContent = 'Jogador Adicionado ✓';
    btn.style.pointerEvents = 'none';
}