document.addEventListener("DOMContentLoaded", function() {
    // Animação ao carregar o poema
    const poemaSection = document.getElementById("poema");
    poemaSection.style.opacity = 1;

    // Música de fundo
    const audio = document.getElementById("audio");
    audio.play();

    document.getElementById("inspirar").addEventListener("click", function() {
        const mensagens = [
            "Liberdade é viver sem amarras!",
            "Explore o mundo e descubra a si mesmo.",
            "Seja a mudança que você deseja ver.",
            "Cada dia é uma nova chance para ser livre!",
            "Siga seu coração e nunca olhe para trás."
        ];

        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        document.getElementById("mensagem").innerText = mensagemAleatoria;

        const mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.style.opacity = 0;
        setTimeout(() => {
            mensagemDiv.style.opacity = 1;
        }, 10);
    });

    // Carrossel de citações
    const citações = document.querySelectorAll(".citação");
    let index = 0;

    function mostrarCitação() {
        citações.forEach((citação, i) => {
            citação.classList.remove("active");
            if (i === index) {
                citação.classList.add("active");
            }
        });
        index = (index + 1) % citações.length; // Cicla pelo índice
    }

    setInterval(mostrarCitação, 3000); // Troca a citação a cada 3 segundos
    mostrarCitação(); // Mostra a primeira citação
});
