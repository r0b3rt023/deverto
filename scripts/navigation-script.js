const itemsList = document.querySelectorAll('.list-item');

const home = document.getElementById("home");
const perfil = document.getElementById("perfil");
const github = document.getElementById("github");
const contacto = document.getElementById("contacto");

const mainDiv = document.getElementById("main-div");
const homeView = "home-view";
mainDiv.classList.add(homeView);

const hiddenClass = "hidden";

function activeLink() {
    ocultarDivs();
    resetContactForm();

    itemsList.forEach((item) =>
        item.classList.remove('active'));

    this.classList.add('active');
    mainDiv.classList.remove(homeView);

    this.classList.forEach((nombreClase) => {
        if (nombreClase === "home") {
            mainDiv.classList.add(homeView);
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