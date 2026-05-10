/**
 * FLUJO DE INGENIERÍA - GESTIÓN ADMIN:
 * 1. Configuración y Estado Global
 * 2. Validaciones y Gestión de Errores
 * 3. Comunicación API (Fetch)
 * 4. Actualización Visual (DOM & Notificaciones)
 * 5. Eventos y Controladores
 */

// --- 1. CONFIGURACIÓN ---
const API_URL = 'http://localhost:3000/api/users'; // Ajusta según tu backend
const TOKEN = localStorage.getItem('token');
let USUARIOS_LOCALES = []; // Respaldo para el buscador

// --- 2. VALIDACIONES Y GESTIÓN DE ERRORES ---

function gestionarErrorVisual(idInput, mensaje) {
    const input = document.getElementById(idInput);
    const spanError = document.getElementById(`error-${idInput}`);
    if (mensaje) {
        input.classList.add('class_input_error');
        spanError.textContent = mensaje;
        spanError.style.display = 'block';
    } else {
        input.classList.remove('class_input_error');
        if (spanError) spanError.style.display = 'none';
    }
}

function validarCamposUsuario(data, esEdicion = false) {
    let esValido = true;
    
    // Detectamos qué IDs usar: los de edición o los de creación (_admin)
    const idNombre = esEdicion ? 'edit_nombre' : 'nombre_admin';
    const idEmail = esEdicion ? 'edit_email' : 'email_admin';
    const idRol = esEdicion ? 'edit_rol' : 'rol_admin';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_]).{8,}$/;

    // 1. Validar Nombre
    if (!data.full_name || data.full_name.length < 3) {
        gestionarErrorVisual(idNombre, 'El nombre debe tener al menos 3 caracteres');
        esValido = false;
    } else { gestionarErrorVisual(idNombre, null); }

    // 2. Validar Email
    if (!emailRegex.test(data.email)) {
        gestionarErrorVisual(idEmail, 'Ingrese un correo electrónico válido');
        esValido = false;
    } else { gestionarErrorVisual(idEmail, null); }

    // 3. Validar Rol (Nueva validación visual)
    if (!data.role || data.role === "") {
        gestionarErrorVisual(idRol, 'Debe seleccionar un rol para el usuario');
        esValido = false;
    } else { gestionarErrorVisual(idRol, null); }

    // 4. Validar Contraseñas (Solo para creación)
    if (!esEdicion) {
        if (!passRegex.test(data.password)) {
            gestionarErrorVisual('pass_admin', 'Mínimo 8 caracteres, incluya Mayúscula, número y símbolo (!@#*)');
            esValido = false;
        } else { gestionarErrorVisual('pass_admin', null); }

        if (data.password !== data.confirm) {
            gestionarErrorVisual('confirma_admin', 'Las contraseñas no coinciden');
            esValido = false;
        } else { gestionarErrorVisual('confirma_admin', null); }
    }

    return esValido;
}

// --- 3. COMUNICACIÓN API (FETCH) ---

async function fetchAPI(endpoint, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        }
    };
    if (body) options.body = JSON.stringify(body);

    const res = await fetch(`${API_URL}${endpoint}`, options);
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.mensaje || 'Error en la operación');
    }
    return await res.json();
}

// --- 4. ACTUALIZACIÓN VISUAL Y NOTIFICACIONES ---

function enviarNotificacion(mensaje, tipo = 'success') {
    const container = document.getElementById('notificationContainer');
    const id = Date.now();
    const color = tipo === 'success' ? 'bg-primary' : 'bg-danger'; // Morado o Rojo

    container.innerHTML += `
    <div id="toast-${id}" class="toast align-items-center text-white ${color} border-0 show" role="alert">
        <div class="d-flex">
            <div class="toast-body"><i class="fas fa-info-circle me-2"></i>${mensaje}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    </div>`;

    setTimeout(() => {
        const t = document.getElementById(`toast-${id}`);
        if (t) t.remove();
    }, 4000);
}
// --- 4. ACTUALIZACIÓN VISUAL ---
function renderUsers(respuesta) {
    // 1. Extraemos la lista del paquete 'data'
    const lista = respuesta.data || respuesta; 
    
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // 2. Ahora sí podemos usar forEach en la lista real
    lista.forEach(user => {
        const role = user.role.toLowerCase();
        const badgeColor = { 'admin': 'bg-danger', 'coach': 'bg-primary', 'user': 'bg-success' }[role] || 'bg-secondary';
        const fecha = new Date(user.created_at).toLocaleDateString('es-CL');

        tbody.innerHTML += `
        <tr id="row-user-${user.id}">    
            <td>${String(user.id).padStart(3, '0')}</td>
            <td><strong>${user.full_name}</strong></td>
            <td>${user.email}</td>
            <td><span class="badge ${badgeColor}">${user.role}</span></td>
            <td>${fecha}</td>
            <td class="text-center">
                <button class="btn btn-warning btn-sm me-1" onclick="abrirModalEdicion(${user.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="confirmarBorrado(${user.id}, this)">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>`;
    });
}

// --- 5. CONTROLADORES ---
async function cargarUsuarios() {
    try {
        const respuesta = await fetchAPI('/');
        // Guardamos solo la lista interna para que 'find' funcione después
        USUARIOS_LOCALES = respuesta.data || []; 
        renderUsers(respuesta);
    } catch (err) {
        enviarNotificacion("No se pudo cargar la lista", "error");
    }
}

document.getElementById('searchUser').addEventListener('input', (e) => {
    // 2. Convertimos lo que escribes a minúsculas para que no importe si usas Mayúsculas
    const terminoBusqueda = e.target.value.toLowerCase();

    // 3. Filtramos nuestra lista 'USUARIOS_LOCALES'
    const usuariosFiltrados = USUARIOS_LOCALES.filter(usuario => {
        const nombre = usuario.full_name.toLowerCase();
        const correo = usuario.email.toLowerCase();

        // Verificamos si el nombre O el correo contienen lo que escribiste
        return nombre.includes(terminoBusqueda) || correo.includes(terminoBusqueda);
    });

    // 4. Actualizamos la tabla enviando los resultados filtrados
    // Importante: Lo enviamos como objeto { data: ... } para que renderUsers lo entienda
    renderUsers({ data: usuariosFiltrados }); 
});


// CREACIÓN DE USUARIO
document.getElementById('formNuevoUsuario').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    
    // Capturamos los datos usando los IDs de tu HTML
    const nuevoUsuario = {
        full_name: document.getElementById('nombre_admin').value.trim(),
        email: document.getElementById('email_admin').value.trim(),
        role: document.getElementById('rol_admin').value,
        password: document.getElementById('pass_admin').value,
        confirm: document.getElementById('confirma_admin').value
    };

    if (validarCamposUsuario(nuevoUsuario)) {
        try {
            btn.disabled = true;
            btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Registrando...';
            
            // Llamada a la API
            await fetchAPI('/', 'POST', nuevoUsuario);
            
            // Feedback visual de éxito
            btn.classList.add('btn-success-state');
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Usuario Creado!';
            
            e.target.reset(); // Limpia el formulario
            await cargarUsuarios(); // Refresca la tabla
            enviarNotificacion("Usuario registrado correctamente");

        } catch (err) {
            enviarNotificacion(err.message, "error");
        } finally {
            setTimeout(() => {
                btn.disabled = false;
                btn.classList.remove('btn-success-state');
                btn.textContent = "Registrar Usuario";
            }, 3000);
        }
    } else {
        // Si hay error, avisamos al administrador
        enviarNotificacion("Por favor, revise los errores en el formulario", "error");
    }
});
// BORRADO CON NOTIFICACIÓN
async function confirmarBorrado(id, btn) {
    if (!confirm("¿Desea eliminar este usuario permanentemente?")) return;

    const originalHtml = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';

    try {
        await fetchAPI(`/${id}`, 'DELETE');
        const fila = document.getElementById(`row-user-${id}`);
        fila.classList.add('fade-out'); // Animación CSS
        
        setTimeout(() => {
            cargarUsuarios();
            enviarNotificacion("Usuario eliminado con éxito");
        }, 500);
    } catch (err) {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
        enviarNotificacion("Error al eliminar", "error");
    }
}

// EDICIÓN EN MODAL

function abrirModalEdicion(id) {
    // 1. Buscamos al usuario en nuestra lista local usando el ID
    const usuario = USUARIOS_LOCALES.find(u => u.id === id);

    if (usuario) {
        // 2. "Pintamos" los datos en los inputs del modal
        // Usamos los IDs que tú pusiste en el HTML (edit_id, edit_nombre, etc.)
        document.getElementById('edit_id').value = usuario.id;
        document.getElementById('edit_nombre').value = usuario.full_name;
        document.getElementById('edit_email').value = usuario.email;
        document.getElementById('edit_rol').value = usuario.role.toLowerCase();

        // 3. Le decimos a Bootstrap que muestre el modal
        const miModal = new bootstrap.Modal(document.getElementById('editUserModal'));
        miModal.show();
    }
}


document.getElementById('btnConfirmarEdicion').addEventListener('click', async () => {
    const id = document.getElementById('edit_id').value;
    const data = {
        full_name: document.getElementById('edit_nombre').value,
        email: document.getElementById('edit_email').value,
        role: document.getElementById('edit_rol').value
    };

    if (validarCamposUsuario(data, true)) {
        try {
            await fetchAPI(`/${id}`, 'PUT', data);
            bootstrap.Modal.getInstance(document.getElementById('editUserModal')).hide();
            enviarNotificacion("Datos actualizados");
            cargarUsuarios();
        } catch (err) {
            enviarNotificacion("Error al actualizar", "error");
        }
    }
});

// INICIO
document.addEventListener('DOMContentLoaded', cargarUsuarios);