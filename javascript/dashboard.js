document.addEventListener('DOMContentLoaded', () => {

    const datosUsuario = localStorage.getItem('user');

    if (datosUsuario) {
        const usuario = JSON.parse(datosUsuario);
        const nombreReal = usuario.full_name || "Usuario";

        const elementoSaludo = document.getElementById('mensajeBienvenida');
        if (elementoSaludo) {
            elementoSaludo.textContent = `¡Bienvenido/a, ${nombreReal}!`;
        }
    }
});