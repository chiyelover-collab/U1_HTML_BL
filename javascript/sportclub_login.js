const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contrasena');
const btnIngresar = document.getElementById('btnIngresar');
const mensajeError = document.getElementById('mensajeError');



btnIngresar.addEventListener('click', async () => {
    const correo = emailInput.value;
    const clave = passwordInput.value;

    if (correo === "" || clave === "") {
        mensajeError.textContent = "Por favor, completa todos los campos";
        mensajeError.style.color = "red"; 
        return; 
    }

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: correo, password: clave })
        });

        const reply = await response.json();

        if (response.ok) {
            const token = reply.token || (reply.data && reply.data.token);
            
            if (token) {
                localStorage.setItem("token", token);
                console.log("Token guardado correctamente");
            }

            if (reply.data && reply.data.user) {
                localStorage.setItem("user", JSON.stringify(reply.data.user));
                const rol = reply.data.user.role.toLowerCase().trim();

                // Redirección según rol
                if (rol === "admin") {
                    window.location.href = "dashboard_admin.html";
                } else if (rol === "coach") {
                    window.location.href = "dashboard_coach.html";
                } else {
                    window.location.href = "dashboard_usuario.html";
                }
            } 
        } else {
            mensajeError.textContent = reply.mensaje || "Credenciales incorrectas";
            mensajeError.style.color = "red";
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        mensajeError.textContent = "Error de conexión con el servidor";
    }
});