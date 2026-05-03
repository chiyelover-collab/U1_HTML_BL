

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

    const response = await fetch ('http://localhost:3000/api/auth/login', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: correo,
            password: clave,   
        })
    });

    const data = await response.json();
    console.log(data);

    // if (encontrado) {
    
    //     localStorage.setItem("user", JSON.stringify(encontrado));

    //     if (encontrado.role === "admin") {
    //         window.location.href = "dashboard_admin.html";
    //     } else if (encontrado.role === "coach") {
    //         window.location.href = "dashboard_coach.html";
    //     } else {
    //         window.location.href = "dashboard_usuario.html";
    //     }
    // } else {
    //     mensajeError.textContent = "Credenciales incorrectas";
    // }
});
