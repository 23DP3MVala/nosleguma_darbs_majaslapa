document.getElementById("poga_par").addEventListener("click", function () {
    window.location.href="#informacija";
});

const izvele = document.getElementById("izvele");
const saturi = document.querySelectorAll(".saturi")

izvele.addEventListener('change', () => {
    const vertiba = izvele.value;
    saturi.forEach(s => s.style.display = 'none');
    if (vertiba) {
        const aktivais = document.getElementById(vertiba);
        if (aktivais) {
            aktivais.style.display = 'flex';
            aktivais.style.flexWrap = "wrap";
        }
    }
});