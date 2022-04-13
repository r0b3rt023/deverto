const itemsList = document.querySelectorAll('.list-item');

const home = document.getElementById("home");
const perfil = document.getElementById("perfil");
const github = document.getElementById("github");
const contacto = document.getElementById("contacto");

const hiddenClass = "hidden";

function activeLink() {
    ocultarDivs();
    itemsList.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');

    this.classList.forEach((nombreClase) => {
        if (nombreClase === "home") {
            home.classList.remove(hiddenClass);
        } else if (nombreClase === "perfil") {
            perfil.classList.remove(hiddenClass);
        } else if (nombreClase === "github") {
            github.classList.remove(hiddenClass);
        } else if (nombreClase === "contacto") {
            contacto.classList.remove(hiddenClass);
        }
    });
    window.scrollTo(0, 0);
}

function ocultarDivs() {
    home.classList.add(hiddenClass);
    perfil.classList.add(hiddenClass);
    github.classList.add(hiddenClass);
    contacto.classList.add(hiddenClass);
}

itemsList.forEach((item) =>
    item.addEventListener('click', activeLink));