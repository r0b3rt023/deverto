const botonEnviar = document.getElementById('boton-enviar');
const nombre = document.getElementById("nombre-contacto");
const telefono = document.getElementById("telofono-contacto");
const email = document.getElementById("email-contacto");
const mensaje = document.getElementById("mensaje-contacto");

const mensajeError = document.getElementById("correo-error");
const mensajeCorrecto = document.getElementById("correo-correcto");

const fieldsEmpty = "fields-empty";

document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    removeOutline();
    mensajeError.classList.add(hiddenClass);
    mensajeCorrecto.classList.add(hiddenClass);

    if(validateForm()) {
        botonEnviar.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_o320x65';
     
        emailjs.sendForm(serviceID, templateID, this)
         .then(() => {
           botonEnviar.value = 'Enviar';
           mensajeCorrecto.classList.remove(hiddenClass);
           this.reset();
           window.scrollTo(0, 0);
         }, (err) => {
           botonEnviar.value = 'Enviar';
           mensajeError.classList.remove(hiddenClass);
           console.log(JSON.stringify(err));
         });
    }
});

function validateForm() {
    let isComplete = true;
    if(nombre.value === null || nombre.value === "") {
        nombre.classList.add(fieldsEmpty);
        isComplete = false;
    }
    if(telefono.value === null || telefono.value === "") {
        telefono.classList.add(fieldsEmpty);
        isComplete = false;
    }
    if(email.value === null || email.value === "") {
        email.classList.add(fieldsEmpty);
        isComplete = false;
    }
    if(mensaje.value === null || mensaje.value === "") {
        mensaje.classList.add(fieldsEmpty);
        isComplete = false;
    }
    console.log("VALIDADO");
    return isComplete;
}

function removeOutline() {
    nombre.classList.remove(fieldsEmpty);
    telefono.classList.remove(fieldsEmpty);
    email.classList.remove(fieldsEmpty);
    mensaje.classList.remove(fieldsEmpty);
}