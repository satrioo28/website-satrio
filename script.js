function cariMateri() {

    let input = document.getElementById("searchInput");

    let kata = input.value.toLowerCase();

    let bagian = document.querySelectorAll("section");

    bagian.forEach(function(section) {

        let isi = section.innerText.toLowerCase();

        if (isi.includes(kata)) {
            section.style.display = "";
        } else {
            section.style.display = "none";
        }

    });

}
function animasiScroll() {

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let posisi = card.getBoundingClientRect().top;

        let tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 100) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("scroll", animasiScroll);

animasiScroll();