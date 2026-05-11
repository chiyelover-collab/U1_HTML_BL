
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_]).{8,}$/;
const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

function gestionarErrorVisual(idInput, mensaje) {
    const input = document.getElementById(idInput);
    const spanError = document.getElementById(`error-${idInput}`);
    
    if (!input || !spanError) return;

    if (mensaje) {
        input.classList.add('class_input_error');
        spanError.textContent = mensaje;
        spanError.style.visibility = 'visible';
    } else {
        input.classList.remove('class_input_error');
        spanError.style.visibility = 'hidden';
    }
}

function validarRegistro(formulario) {
    let esValido = true;

    // Validación Email
    if (!formulario.email || !emailRegex.test(formulario.email)) {
        gestionarErrorVisual('email', "Email inválido o vacío");
        esValido = false;
    } else { gestionarErrorVisual('email', null); }

    if (!formulario.full_name || formulario.full_name.length < 3) {
        gestionarErrorVisual('nombre', "Nombre muy corto");
        esValido = false;
    } else if (!nombreRegex.test(formulario.full_name)) {
        gestionarErrorVisual('nombre', "El nombre solo puede contener letras");
        esValido = false;
    } else { 
        gestionarErrorVisual('nombre', null); 
    }

    if (!passRegex.test(formulario.password)) {
        gestionarErrorVisual('contrasena', "Use Mayúscula, número y símbolo");
        esValido = false;
    } else { gestionarErrorVisual('contrasena', null); }

    if (formulario.password !== formulario.confirm) {
        gestionarErrorVisual('contrasena2', "Las contraseñas no coinciden");
        esValido = false;
    } else { gestionarErrorVisual('contrasena2', null); }


    if (!formulario.metadata.deporte) {
        gestionarErrorVisual('deporte', "Campo obligatorio");
        esValido = false;
    } else { gestionarErrorVisual('deporte', null); }

    if (!formulario.metadata.objetivo) {
        gestionarErrorVisual('objetivo', "Campo obligatorio");
        esValido = false;
    } else { gestionarErrorVisual('objetivo', null); }

    return esValido;
}

document.getElementById('btnRegistrar').addEventListener('click', async () => {
    const nivelSeleccionado = document.querySelector('input[name="nivel"]:checked');
    
    const formulario = {
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('contrasena').value,
        confirm: document.getElementById('contrasena2').value,
        full_name: document.getElementById('nombre').value.trim(),
        birth_date: document.getElementById('edad').value,
        metadata: {
            nivel: nivelSeleccionado ? nivelSeleccionado.value : null,
            deporte: document.getElementById('deporte').value.trim(),
            objetivo: document.getElementById('objetivo').value.trim()
        }
    };

    if (validarRegistro(formulario)) {
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formulario.email,
                    password: formulario.password,
                    full_name: formulario.full_name,
                    birth_date: formulario.birth_date,
                    metadata: formulario.metadata
                })
            });

            if (response.ok) {
                window.location.href = "exito_register.html";
            } else {
                const reply = await response.json();
                const generalError = document.getElementById('mensajeError');
                if (generalError) {
                    generalError.textContent = reply.mensaje || "Error en el servidor";
                    generalError.style.visibility = 'visible';
                }
            }
        } catch (error) {
            console.error("Error de conexión:", error);
        }
    }
});