function toggleInfo() {
    const info = document.getElementById("info");

    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
    } else {
        info.classList.add("hidden");
    }
}

function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = "Gracias por contactarme 😊";
}