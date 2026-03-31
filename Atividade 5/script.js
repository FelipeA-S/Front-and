const cria = document.getElementById("b");
const btn = document.getElementById("btn");

const estado = {
    normal: "estado1.png",
    alimentado: "estado2.png",
    puto: "estado3.png",
    morto: "estado4.png",
    comendo: "estado5.png",
};

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

const fundoDia = "fundoDia.png";
const fundoNoite = "fundoNoite.png";
let horas = 0;

function controlador() {
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => {
        contador++;
        console.log("tempo:", contador);
        if (contador == 30) {
            cria.src = estado.puto;
        }
        if (contador == 60) {
            cria.src = estado.morto;
        }
    }, 1000);
};

function alimentar() {
    cria.src = estado.comendo;
    contador = 0;
    console.log("Comendo");
    if (time_click) clearInterval(time_click);
    time_click = setTimeout(() => {
        cria.src = estado.alimentado;
        time_out = setTimeout(() => {
            cria.src = estado.normal;
        }, 2000);
    }, 1000);
}

function atualizarFundo() {
    if (horas) clearInterval(horas);
    horas = setInterval(() => {
        horas++;
        if (horas >= 12) {
            document.body.style.backgroundImage = `url('${fundoNoite}')`;
        } else {
            document.body.style.backgroundImage = `url('${fundoDia}')`;
        }
        if (horas >= 24) horas = 0;
    }, 100);
}

controlador();
atualizarFundo();