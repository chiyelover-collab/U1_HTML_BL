
const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
function validarDatosPersonales() {
    let esValido = true;
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const objetivos = document.getElementById('objetivos').value.trim();

    if (nombre.length < 3) {
        gestionarErrorVisual('nombre', 'Mínimo 3 caracteres');
        esValido = false;
    } 
    else if (!nombreRegex.test(nombre)) {
        gestionarErrorVisual('nombre', 'Solo se permiten letras');
        esValido = false;
    } 
    else { 
        gestionarErrorVisual('nombre', null); 
    }

    if (!emailRegex.test(email)) {
        gestionarErrorVisual('email', 'Ingrese un correo electrónico válido');
        esValido = false;
    } else { gestionarErrorVisual('email', null); }

    if (objetivos.length < 10) {
        gestionarErrorVisual('objetivos', 'Mínimo 10 caracteres');
        esValido = false;
    } 
    else if (!nombreRegex.test(objetivos)) {
        gestionarErrorVisual('objetivos', 'Solo se permiten letras y espacios');
        esValido = false;
    } 
    else { 
        gestionarErrorVisual('objetivos', null); 
    }

    return esValido;
}



function validarNuevaPassword() {
    let esValido = true;
    const nueva = document.getElementById('new_password').value;
    const confirma = document.getElementById('confirm_password').value;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_]).{8,}$/;

    if (!passRegex.test(nueva)) {
        gestionarErrorVisual('new_password', 'Mínimo 8 caracteres (use Mayúscula, número y símbolo !@#*)');
        esValido = false;
    } else { gestionarErrorVisual('new_password', null); }

    if (nueva !== confirma || !confirma) {
        gestionarErrorVisual('confirm_password', 'Las contraseñas no coinciden');
        esValido = false;
    } else { gestionarErrorVisual('confirm_password', null); }

    return esValido;
}

function gestionarErrorVisual(idInput, mensaje) {
    const input = document.getElementById(idInput);
    const spanError = document.getElementById(`error-${idInput}`);
    if (mensaje) {
        input.classList.add('class_input_error');
        spanError.textContent = mensaje;
        spanError.textcolor = 'red';
        spanError.style.visibility = 'visible';
    } else {
        input.classList.remove('class_input_error');
        if (spanError) spanError.style.visibility = 'hidden';
    }
}

async function obtenerPerfilDeBD() {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:3000/api/auth/me', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}`, 'Cache-Control': 'no-store' }
    });
    if (!res.ok) return null;
    return await res.json();
}

async function actualizarPerfilEnBD(datos) {
    const res = await fetch('http://localhost:3000/api/auth/me', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    if (!res.ok) throw new Error("Error al guardar cambios");
    return await res.json();
}

async function actualizarPasswordEnBD(actual, nueva, confirma) {
    const res = await fetch('http://localhost:3000/api/auth/me/password', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            current_password: actual, 
            new_password: nueva,
            confirm_password: confirma
            })
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.mensaje || "Contraseña actual incorrecta");
    }
}

function refrescarTodaLaInterfaz(usuario) {
    const d = usuario.data; 

    const nombreReal = d.full_name || "Usuario";
    document.getElementById('perfilNombre').textContent = nombreReal;
    document.getElementById('nombre').value = nombreReal;

    document.getElementById('perfilEmail').textContent = d.email || "";
    document.getElementById('email').value = d.email || "";

    if (d.birth_date) {
        const partes = d.birth_date.split('-'); 
        const fechaLinda = `${partes[2]}/${partes[1]}/${partes[0]}`;
        document.getElementById('perfilFecha').textContent = fechaLinda;
        document.getElementById('fecha_nacimiento').value = d.birth_date;
    }

    if (d.metadata && d.metadata.objetivo) {
        const cardObjetivos = document.getElementById('perfilObjetivos');
        if (cardObjetivos) {
            const lineas = d.metadata.objetivo.split('\n');
            const listaHtml = lineas
                .map(linea => linea.trim())
                .filter(linea => linea !== "") 
                .map(linea => `✰ ${linea}`)
                .join('<br>');
            cardObjetivos.innerHTML = `<p class="class_p1">${listaHtml}</p>`;
        }
        document.getElementById('objetivos').value = d.metadata.objetivo;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const datosIniciales = await obtenerPerfilDeBD();
    if (datosIniciales) {
        refrescarTodaLaInterfaz(datosIniciales);
    } else {
        window.location.href = 'login.html';
    }

    document.getElementById('formPerfil').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (validarDatosPersonales()) {
            const btn = document.getElementById('btnGuardarPerfil');
            const nuevosDatos = {
                full_name: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                birth_date: document.getElementById('fecha_nacimiento').value,
                metadata: {
                    objetivo: document.getElementById('objetivos').value
                }
            };

            try {
                btn.disabled = true;
                btn.textContent = "Guardando...";
                const resultado = await actualizarPerfilEnBD(nuevosDatos);
                refrescarTodaLaInterfaz(resultado);
                btn.textContent = "¡Guardado!";
            } catch (err) {
                gestionarErrorVisual('email', err.message);
            } finally {
                setTimeout(() => { 
                    btn.disabled = false; 
                    btn.textContent = "Guardar Cambios"; 
                }, 2000);
            }
        }
    });

    document.getElementById('formPassword').addEventListener('submit', async (e) => {
        e.preventDefault();
        if (validarNuevaPassword()) {
            const btn = document.getElementById('btnCambiarPassword');
            const actual = document.getElementById('current_password').value;
            const nueva = document.getElementById('new_password').value;
            const confirma = document.getElementById('confirm_password').value;

            try {
                btn.disabled = true;
                await actualizarPasswordEnBD(actual, nueva, confirma);
                btn.textContent = "¡Éxito!";
                document.getElementById('formPassword').reset();
            } catch (err) {
                gestionarErrorVisual('current_password', err.message);
            } finally {
                setTimeout(() => { 
                    btn.disabled = false; 
                    btn.textContent = "Actualizar Contraseña"; 
                }, 2000);
            }
        }
    });
});