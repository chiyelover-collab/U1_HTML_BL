const users = [
    { user: "user1@sportclub.cl", password: "1234", role: "user" }, 
    { user: "coach1@sportclub.cl", password: "1234", role: "coach" }, 
    { user: "admin1@sportclub.cl", password: "1234", role: "admin" } 
];

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contrasena');
const btnIngresar = document.getElementById('btnIngresar');
const mensajeError = document.getElementById('mensajeError');

btnIngresar.addEventListener('click', () => {
    const correo = emailInput.value;
    const clave = passwordInput.value;

    if (correo === "" || clave === "") {
        mensajeError.textContent = "Por favor, completa todos los campos";
        mensajeError.style.color = "red"; 
        return; 
    }

    const encontrado = users.find(u => u.user === correo && u.password === clave);

    if (encontrado) {
    
        localStorage.setItem("user", JSON.stringify(encontrado));

        if (encontrado.role === "admin") {
            window.location.href = "dashboard_admin.html";
        } else if (encontrado.role === "coach") {
            window.location.href = "dashboard_coach.html";
        } else {
            window.location.href = "dashboard_usuario.html";
        }
    } else {
        mensajeError.textContent = "Credenciales incorrectas";
    }
});
