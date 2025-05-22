const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInside) {
      navLinks.classList.remove('active');
    }
});

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