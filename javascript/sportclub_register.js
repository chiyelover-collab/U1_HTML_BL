const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contrasena');
const password2Input = document.getElementById('contrasena2');
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const deporteInput = document.getElementById('deporte');
const objetivoInput = document.getElementById('objetivo');
const btnIngresar = document.getElementById('btnRegistrar');
const mensajeError = document.getElementById('mensajeError');

btnRegistrar.addEventListener('click', async () => {
    const email = emailInput.value;
    const clave = passwordInput.value;
    const clave2 = password2Input.value;
    const nombre = nombreInput.value;
    const edad = edadInput.value;
    const nivelSeleccionado = document.querySelector('input[name="nivel"]:checked');
    const nivel = nivelSeleccionado ? nivelSeleccionado.value : null;
    const deporte = deporteInput.value;
    const objetivo = objetivoInput.value;

    if (!email || !clave || !clave2 || !nombre || !edad || !deporte || !objetivo || !nivel) {
        mensajeError.textContent = "Aún hay campos sin completar";
        mensajeError.style.color = "red";
        return;
    }

    if (clave !== clave2) {
        mensajeError.textContent = "Las contraseñas no coinciden";
        mensajeError.style.color = "red";
        return;
    }

    try { 
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: clave,
                full_name: nombre,
                birth_date: edad,
                nivel: nivel,
                deporte: deporte,
                objetivo: objetivo
        })
    });

    const reply = await response.json();

        if (response.ok) {
            window.location.href = "exito_register.html";
            mensajeError.style.color = "green";
        } else {
            if (response.status === 400) {
                mensajeError.textContent = "Faltan campos o son inválidos";
            } 
            else if (response.status === 409) {
                mensajeError.textContent = "Este correo ya está registrado";
            }
            else if (response.status === 500) {
                mensajeError.textContent = "Error del servidor. Intenta más tarde";
            }
            else {
                mensajeError.textContent = reply.message || "Error en el registro";
            }
            mensajeError.style.color = "red";
            }   
        } catch (error) {
    mensajeError.textContent = "Error de conexión con el servidor";
    mensajeError.style.color = "red";
    }
});