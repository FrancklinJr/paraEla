const inicio = new Date("2025-08-22");

function atualizarContador() {

    const now = new Date();
    const diff = now - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const segundos = Math.floor(diff / 1000) % 60;

    document.getElementById("contador").innerText = `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);

function mostrarSurpresa() {
    document.getElementById("startBtn").classList.add("hidden")
    document.getElementById("contadorSection").classList.remove("hidden");
    document.getElementById("contadorSection").classList.add("show");
    document.getElementById("musica").play();
}

function mostrarFinal() {
    document.getElementById("finalBtn").classList.add("hidden")
    document.getElementById("finalSection").classList.remove("hidden");
    document.getElementById("finalSection").classList.add("show");
}

function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.innerText = "❤️";

    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.top = "-20px";
    coracao.style.fontSize = "30px";

    document.body.appendChild(coracao);

    let pos = 0;

    const animacao = setInterval(() => {

        pos += 5;
        coracao.style.top = pos + "px";

        if (pos > window.innerHeight) {
        clearInterval(animacao);
        coracao.remove();
        }

    }, 30);
}

function explodirCoracoes() {

    navigator.vibrate([200,100,200]);

    for (let i = 0; i < 100; i++) {
        setTimeout(criarCoracao, i * 80);
    }
}

function coracaoFundo() {
    const heart = document.createElement("div");

    heart.innerText = "💖"
    heart.classList.add("floating-heart");

    heart.style.left = Math.random()*100 + "vw";

    document.body.appendChild(heart);

    setTimeout(()=> {
        heart.remove();
    },6000)
}

setInterval(coracaoFundo,800)