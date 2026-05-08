async function obtenerPerfil() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        const res = await fetch('http://localhost:3000/api/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                // Nuevos encabezados para forzar datos frescos (evita el 304)
                'Cache-Control': 'no-store, no-cache, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });

        if (!res.ok) throw new Error('Error al obtener perfil');
        
        return await res.json();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

function actualizarCardPerfil(usuario) {
    // Nueva validación para extraer datos si vienen dentro de una propiedad 'data'
    const datos = usuario.data || usuario; 

    const nombreElement = document.getElementById('perfilNombre');
    const emailElement = document.getElementById('perfilEmail');
    const fechaElement = document.getElementById('perfilFecha');

    if (nombreElement) nombreElement.textContent = datos.nombre || "Usuario";
    
    // Nueva validación con '?.' para evitar que la página se rompa si el email no llega
    if (emailElement) {
        emailElement.textContent = datos.email?.toLowerCase() || "Sin email registrado";
    }
    
    if (fechaElement) fechaElement.textContent = datos.fechaNacimiento || "--/--/----";
}

function actualizarFormulario(usuario) {
    const datos = usuario.data || usuario;
    
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');

    if (inputNombre) inputNombre.value = datos.nombre || "";
    if (inputEmail) inputEmail.value = datos.email || "";
}

document.addEventListener('DOMContentLoaded', async () => {
    const usuario = await obtenerPerfil();

    if (!usuario) {
        window.location.href = 'login.html';
        return;
    }

    actualizarCardPerfil(usuario);
    actualizarFormulario(usuario);
});