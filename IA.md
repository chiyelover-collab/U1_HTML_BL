Documentacion Uso de IA: 

*Utilicé la IA para responder preguntas y clarificar durante el proceso de aprendizaje, pero le pedi explicitamente que no me diera codigo ya que quería aprender a hacer este trabajo de manera manual y mejorar mi uso de HTML, CSS y Bootstrap. A continuación esta la documentacion de momentos en que realmente no sabía como solucionar un problema y tuve que pedirle clarificación como codigo a la IA (aunque tambien incluí explicaciones que fueron muy importantes aunque no haya usado el codigo textualmente) 

1.
Herramienta utilizada: Deepseek
Fecha: 27/03/2026
Prompt utilizado: Como puedo centrar el body de mi login? (Me ofrece maneras complicadas asi que hago una segunda pregunta) Como hacerlo de manera facil, sin necesidad de conceptos complejos?
Resultado generado: margin 0 auto;
Modificaciones realizadas: margin: auto;
Justificación: Lo utilicé para centrar el cuerpo de mis paginas en las paginas inciales porque no estaba trabajando con bootstrap aun. No era necesario poner el 0, el profesor me aclaró eso en clases e hice el cambio. 

2.
Herramienta utilizada: Deepseek
Fecha: 28/03/2026
Prompt utilizado: Como puedo poner un texto explicativo dentro del input en un form?
Resultado generado: placeholder;
Modificaciones realizadas: placeholder= "Ingresa tu contraseña";
Justificación: Lo utilice para poner palabras en mis inputs pero lo adapté a mi login. 

3.
Herramienta utilizada: Deepseek
Fecha: 28/03/2026
Prompt utilizado: Ahora quiero crear una linea que separe el formulario, para poder crear el Olvidaste tu contraseña?
Resultado generado: <hr>;
Modificaciones realizadas: No hice cambios porque es un comando especifico;
Justificación: Lo implemente en muchos lugares en mi codigo.

4.
Herramienta utilizada: Deepseek
Fecha: 03/04/2026
Prompt utilizado: Como crear campos obligatorios en un form?
Resultado generado: Usas el atributo required dentro de la etiqueta <input>;
Modificaciones realizadas: No hice cambios porque es un comando especifico;
Justificación: Lo implemente en el formulario de registro de usuario.

5.
Herramienta utilizada: Deepseek
Fecha: 08/04/2026
Prompt utilizado: Quiero poner una foto grande y escribir texto sobre ella? (Hice como 5 preguntas mas donde pedi que me explicara paso por paso que significaba el codigo porque recien comenzaba a aprender a usar bootstrap)
Resultado generado:

<div class="hero" style="background-image: url('ruta-de-tu-foto.jpg'); background-size: cover; background-position: center; height: 100vh;">
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-12 d-flex flex-column justify-content-center align-items-center text-center text-white">
        <h1>Tu título principal</h1>
        <p class="lead">Un subtítulo que describe tu producto o servicio</p>
        <button class="btn btn-primary btn-lg">Comenzar</button>
      </div>
    </div>
  </div>
</div>

Modificaciones realizadas: No usé el codigo literal, solo usé algunas cosas que me facilitaron que me quedara como yo quería que se viera.
Justificacion: Lo implementé en mi landing page, no podía hacer que el texto se viera por encima de la foto.


6.
Herramienta utilizada: Deepseek
Fecha: 08/04/2026
Prompt utilizado: La foto en la columna de la izquierda me quedó arriba y quiero que quede al medio?
Resultado generado: Agregale la clase align-items-center al row que contiene las tres columnas.
Modificaciones realizadas: No hice cambios porque es un comando especifico;
Justificación: Lo usé para ordenar las imagenes que quería poner y el carrusel en my landing page.


6.
Herramienta utilizada: Deepseek
Fecha: 08/04/2026
Prompt utilizado: Como hacer una barra de progreso en bootstrap?
Resultado generado: 

<div class="progress">
  <div class="progress-bar" style="width: 60%;" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
    60%
  </div>
</div>

Modificaciones realizadas: Le hice muchos cambios porque la usé de varias maneras en mis paginas, asi que la adapté a lo que la necesitaba.
Justificación: Necesitaba ver el codigo para entender cual era la estructura de este elemento.

7.
Herramienta utilizada: Deepseek
Fecha: 09/04/2026
Prompt utilizado: Y como pongo este card al lado del otro card pero arriba y con espacios entre medio
Resultado generado: 

<div class="row g-3">
  <div class="col-md-6">
    <div class="card">
      ... primer card ...
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      ... segundo card ...
    </div>
  </div>
</div>

Modificaciones realizadas: Le hice muchos cambios porque era solo la estructura;
Justificación: Aqui recien empecé a entender como funcionaba el sistema de grillas de bootstrap porque hasta este momento no entendía bien como funcionaba, necesitaba ver un ejemplo de como se escribía la estructura de lo que quería hacer porque no entendía.

8.
Herramienta utilizada: Deepseek
Fecha: 09/04/2026
Prompt utilizado: Y ahora como creo un card de los dias de la semana? Quiero que tenga los días de la semana como columnas  y que tenga dos filas abajo donde anotar que clase y en que horario esta ocupado ese dia ej: 

Lunes
Tenis 19:00

Resultado generado: 

<div class="table-responsive">
  <table class="table table-bordered text-center">
    <thead>
      <tr>
        <th>Lunes</th>
        <th>Martes</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr><td>Tenis</td>...</tr>
      <tr><td>19:00</td>...</tr>
    </tbody>
  </table>
</div>

Estructura de una tabla en Bootstrap
Etiqueta	Significado
<table class="table">	Crea la tabla con estilos de Bootstrap
<thead>	Encabezado de la tabla (fila de títulos)
<tbody>	Cuerpo de la tabla (las filas de datos)
<tr>	Fila de la tabla
<th>	Celda de encabezado (negrita, especial)
<td>	Celda normal (contenido)


Modificaciones realizadas: Le hice muchos cambios porque era solo la estructura y despues la usé en otros elementos de las paginas;
Justificación: No sabia usar las tablas en bootstrap asique tuve que pedirle a la IA que me explicara como funcionaba y como hacer lo que quería hacer. 

9.
Herramienta utilizada: Deepseek
Fecha: 10/04/2026
Prompt utilizado: Como le pongo en el css que el texto este con una linea abajo
Resultado generado: text-decoration: underline;
Modificaciones realizadas: Era un comando especifico, asi que no le cambie nada pero lo usé en distintos lugares.
Justificación: No sabia como se hacía. 

10.
Herramienta utilizada: Deepseek
Fecha: 11/04/2026
Prompt utilizado: Tengo un problema, mi pagina se ve muy mal en movil, hay algo que se pueda hacer?
Resultado generado: 
1. Usá col-* en lugar de col-md-* para móvil

col-md-3 solo se activa en pantallas medianas (768px o más). En móvil, no tiene efecto y la columna puede ocupar todo el ancho.

Si querés que funcione en móvil, usá col-3 o combiná:
class="col-6 col-md-3" → en móvil ocupa la mitad, en tablet/computadora un cuarto.
2. Las imágenes deben tener max-width: 100%

Si una imagen es más ancha que la pantalla del celular, se desborda y rompe el diseño.

En tu CSS:
img { max-width: 100%; height: auto; }

Modificaciones realizadas: Lo implementé en todo mi codigo, no le pedi que me lo diera explicito.
Justificación: Esto fue realmente util asi que lo documenté igual porque no habian entendido lo de la responsividad de las paginas hasta este momento en que terminé mi sitio y lo abri desde el telefono y se veía terrible.

11.
Herramienta utilizada: Deepseek
Fecha: 11/04/2026
Prompt utilizado: Se sale el texto, la tabla se ve cortada
Resultado generado: 

.card, .card-body, p, span, h1, h2, h3, h4, h5, h6 {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

Modificaciones realizadas: Solo usé word-wrap porque fue suficiente;
Justificación: No sabía como hacer para que entrara todo el contenido en la vista para movil.

12.
Herramienta utilizada: Deepseek
Fecha: 11/04/2026
Prompt utilizado: El navbar se ve cuando la pagina esta grande, pero al estar pequeña desaparece.
Resultado generado: 

La causa

Esto es comportamiento normal de Bootstrap. En pantallas chicas, el navbar se "colapsa" y los enlaces se esconden detrás de un botón de hamburguesa (☰). Tenés que apretar ese botón para que aparezcan los enlaces.
Si el botón de hamburguesa no aparece o no funciona
Causa 1: Falta el navbar-toggler en tu código

Tu navbar debe tener esta estructura:
html

<nav class="navbar navbar-expand-lg class_navbar">
  <div class="container-fluid">
    <!-- Botón de hamburguesa -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Contenido colapsable -->
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav me-auto">
        ...
      </ul>
    </div>
  </div>
</nav>

El data-bs-target debe coincidir con el id del div colapsable.

Modificaciones realizadas: Implementé este codigo en mi codigo.
Justificación: No tenía idea que los navbar colapsaban en vista movil.

12.
Herramienta utilizada: Deepseek
Fecha: 12/04/2026
Prompt utilizado: Como se ponia el margen automatico en los col?
Resultado generado: 
La clase de Bootstrap para margen automático en columnas es mx-auto.
¿Qué significa mx-auto?

    m = margen

    x = eje horizontal (izquierda y derecha)

    auto = automático

mx-auto significa: "margen izquierdo y derecho automáticos". Esto centra la columna horizontalmente dentro de su row.
¿Dónde se pone?

En el div con la clase col:

<div class="col-6 mx-auto">
¿Qué hace?

El navegador calcula el espacio sobrante a la izquierda y derecha de la columna y lo reparte en partes iguales. La columna queda centrada.
Ejemplo
html

<div class="row">
  <div class="col-4 mx-auto">
    Esta columna está centrada
  </div>
</div>

La columna ocupa 4 columnas de ancho (1/3 del row), y el resto del espacio se reparte automáticamente a los costados.
¿Qué pasa si no uso mx-auto?

Por defecto, las columnas se alinean a la izquierda del row. mx-auto las centra.
Variaciones
Clase	Efecto
mx-auto	Margen izquierdo y derecho automático (centra horizontalmente)
ms-auto	Margen izquierdo automático (empuja el contenido a la derecha)
me-auto	Margen derecho automático (empuja el contenido a la izquierda)
my-auto	Margen arriba y abajo automático (centra verticalmente)

Modificaciones realizadas: Lo usé donde consideré que era necesario.
Justificación: Aún no sé todos los comandos de bootstrap.

12.
Herramienta utilizada: Deepseek
Fecha: 11/04/2026
Prompt utilizado: El navbar se ve cuando la pagina esta grande, pero al estar pequeña desaparece.
Resultado generado: 

La causa

Esto es comportamiento normal de Bootstrap. En pantallas chicas, el navbar se "colapsa" y los enlaces se esconden detrás de un botón de hamburguesa (☰). Tenés que apretar ese botón para que aparezcan los enlaces.
Si el botón de hamburguesa no aparece o no funciona
Causa 1: Falta el navbar-toggler en tu código

Tu navbar debe tener esta estructura:
html

<nav class="navbar navbar-expand-lg class_navbar">
  <div class="container-fluid">
    <!-- Botón de hamburguesa -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Contenido colapsable -->
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav me-auto">
        ...
      </ul>
    </div>
  </div>
</nav>

El data-bs-target debe coincidir con el id del div colapsable.

Modificaciones realizadas: Implementé este codigo en mi codigo.
Justificación: No tenía idea que los navbar colapsaban en vista movil.

13.
Herramienta utilizada: Deepseek
Fecha: 12/04/2026
Prompt utilizado: Como hago que el boton de hamburguesa cambie de color?
Resultado generado: 
La regla básica

El ícono del botón de hamburguesa toma el color de la propiedad color del navbar o del botón mismo.
Clase de Bootstrap	Color del ícono
navbar-dark	Ícono blanco (para fondos oscuros)
navbar-light	Ícono negro (para fondos claros)


Modificaciones realizadas: No lo cambie porque es un comando especifico.
Justificación: Aún no sé todos los comandos de bootstrap.

14.
Herramienta utilizada: Deepseek
Fecha: 06/05/2026
Prompt utilizado: Estamos hablando de la implementacion de una pagina con HTML CSS, Javascript y bootstrap que es el DOM? como se aplica a las paginas

Resultado generado: 
DOM (Document Object Model) es una representación estructurada de tu página HTML en forma de árbol de nodos. Cuando el navegador carga tu página, crea automáticamente el DOM, permitiendo que JavaScript acceda, modifique y manipule los elementos de la página en tiempo real.


Modificaciones realizadas: Es una explicacion.
Justificación: No sabia que era el DOM

15.

Herramienta utilizada: Deepseek
Fecha: 06/05/2026
Prompt utilizado: Tengo varias preguntas. Estoy haciendo el javascript en otro archivo, las funciones van en este mismo archivo de javascript? Para que. Donde van. Explicame todo no me des solo codigo porque NO QUIERO COPIAR CODIGO.  

Además, lo que tengo que hacer es mostrar la informacion de perfil, permitir actualizar la informacion del perfil y tambien permitir cambiar la contraseña, con validaciones que tambien sean visuales.

Resultado generado: 
// ============================================
// 1. VARIABLES GLOBALES
// ============================================
// (solo si son necesarias, ejemplo: token, usuario actual)

// ============================================
// 2. FUNCIONES DE VALIDACIÓN
// ============================================
function validarEmail(email) { ... }
function validarContrasenaSegura(password) { ... }
function validarCampoObligatorio(valor) { ... }

// ============================================
// 3. FUNCIONES PARA MOSTRAR ERRORES
// ============================================
function mostrarError(inputId, mensaje) { ... }
function limpiarError(inputId) { ... }

// ============================================
// 4. FUNCIONES PARA COMUNICARSE CON BACKEND
// ============================================
async function obtenerPerfil() { ... }
async function actualizarPerfil(datos) { ... }
async function cambiarPassword(datos) { ... }

// ============================================
// 5. FUNCIONES PARA ACTUALIZAR LA VISTA
// ============================================
function cargarDatosEnFormulario(usuario) { ... }
function cargarDatosEnPerfil(usuario) { ... }

// ============================================
// 6. MANEJADORES DE EVENTOS
// ============================================
function handleGuardarCambios(event) { ... }
function handleCambiarPassword(event) { ... }

// ============================================
// 7. VALIDACIONES EN TIEMPO REAL
// ============================================
document.getElementById('email')?.addEventListener('input', function() { ... })
document.getElementById('new_password')?.addEventListener('input', function() { ... })

// ============================================
// 8. INICIALIZACIÓN (se ejecuta al cargar)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // 1. Cargar datos del backend
    // 2. Asignar event listeners a los botones
    // 3. Configurar validaciones en tiempo real
});

Modificaciones realizadas: Es una explicacion.
Justificación: No sabia usar javascript.

16.
Herramienta utilizada: Deepseek
Fecha: 07/05/2026
Prompt utilizado: 

Resultado generado: Necesito crear las funciones necesarias de javascript de maners modular para mantener el orden.

// ============================================
// 1. FUNCIONES DE VALIDACIÓN
// ============================================

function validarCampoObligatorio(valor) {
    return valor && valor.trim() !== '';
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarContrasena(password) {
    if (password.length < 8) return false;
    const tieneLetra = /[A-Za-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    return tieneLetra && tieneNumero;
}

// ============================================
// 2. FUNCIONES DE ERRORES (UI)
// ============================================

function mostrarError(idInput, mensaje) {
    const input = document.getElementById(idInput);
    const errorDiv = document.getElementById(idInput + 'Error');
    
    if (input) input.classList.add('is-invalid');
    if (errorDiv) {
        errorDiv.textContent = mensaje;
        errorDiv.style.display = 'block';
    }
}

function limpiarError(idInput) {
    const input = document.getElementById(idInput);
    const errorDiv = document.getElementById(idInput + 'Error');
    
    if (input) input.classList.remove('is-invalid');
    if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    }
}

function mostrarFeedback(mensaje, tipo) {
    const feedback = document.getElementById('feedbackMensaje');
    if (!feedback) return;
    
    feedback.className = `alert alert-${tipo}`;
    feedback.textContent = mensaje;
    feedback.style.display = 'block';
    
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 3000);
}

// ============================================
// 3. FUNCIONES DE API (BACKEND)
// ============================================

function obtenerToken() {
    return localStorage.getItem('token');
}

async function obtenerPerfil() {
    const token = obtenerToken();
    if (!token) return null;
    
    const res = await fetch('http://localhost:8080/api/auth/me', {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    
    if (res.status === 401) {
        window.location.href = 'login.html';
        return null;
    }
    
    if (!res.ok) return null;
    return await res.json();
}

async function actualizarPerfil(datos) {
    const token = obtenerToken();
    
    const res = await fetch('http://localhost:8080/api/auth/me', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(datos)
    });
    
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.mensaje || 'Error al actualizar');
    }
    
    return await res.json();
}

async function cambiarPassword(datos) {
    const token = obtenerToken();
    
    const res = await fetch('http://localhost:8080/api/auth/me/password', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(datos)
    });
    
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.mensaje || 'Error al cambiar contraseña');
    }
    
    return true;
}

// ============================================
// 4. FUNCIONES DE VISTA (ACTUALIZAR PANTALLA)
// ============================================

function formatearFecha(fechaISO) {
    if (!fechaISO) return 'No especificada';
    const [anio, mes, dia] = fechaISO.split('-');
    return `${dia}/${mes}/${anio}`;
}

function capitalizarNombre(nombre) {
    if (!nombre) return '';
    return nombre.split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join(' ');
}

function actualizarCardPerfil(usuario) {
    const nombreElement = document.getElementById('perfilNombre');
    const emailElement = document.getElementById('perfilEmail');
    const fechaElement = document.getElementById('perfilFecha');
    const rolElement = document.getElementById('perfilRol');
    
    if (nombreElement) nombreElement.textContent = capitalizarNombre(usuario.nombre);
    if (emailElement) emailElement.textContent = usuario.email.toLowerCase();
    if (fechaElement) fechaElement.textContent = formatearFecha(usuario.fechaNacimiento);
    if (rolElement) {
        rolElement.textContent = usuario.rol;
        let color = 'success';
        if (usuario.rol === 'admin') color = 'danger';
        if (usuario.rol === 'coach') color = 'primary';
        rolElement.className = `badge bg-${color}`;
    }
    
    // Objetivos
    if (usuario.objetivos && document.getElementById('perfilObjetivos')) {
        const objetivosArray = usuario.objetivos.split('\n').filter(o => o.trim());
        document.getElementById('perfilObjetivos').innerHTML = objetivosArray.map(o => `<p class="class_p1"> ✰ ${o}</p>`).join('');
    }
}

function actualizarFormulario(usuario) {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const fechaInput = document.getElementById('fecha_nacimiento');
    const objetivosInput = document.getElementById('objetivos');
    
    if (nombreInput) nombreInput.value = capitalizarNombre(usuario.nombre);
    if (emailInput) emailInput.value = usuario.email.toLowerCase();
    if (fechaInput && usuario.fechaNacimiento) fechaInput.value = usuario.fechaNacimiento;
    if (objetivosInput && usuario.objetivos) objetivosInput.value = usuario.objetivos;
}

// ============================================
// 5. VALIDACIONES DE FORMULARIOS COMPLETOS
// ============================================

function validarFormularioPerfil() {
    let valido = true;
    
    const nombre = document.getElementById('nombre')?.value || '';
    if (!validarCampoObligatorio(nombre)) {
        mostrarError('nombre', 'El nombre es obligatorio');
        valido = false;
    } else {
        limpiarError('nombre');
    }
    
    const email = document.getElementById('email')?.value || '';
    if (!validarCampoObligatorio(email)) {
        mostrarError('email', 'El email es obligatorio');
        valido = false;
    } else if (!validarEmail(email)) {
        mostrarError('email', 'Ingrese un email válido');
        valido = false;
    } else {
        limpiarError('email');
    }
    
    return valido;
}

function validarFormularioPassword() {
    let valido = true;
    
    const actual = document.getElementById('current_password')?.value || '';
    if (!validarCampoObligatorio(actual)) {
        mostrarError('current_password', 'Ingrese su contraseña actual');
        valido = false;
    } else {
        limpiarError('current_password');
    }
    
    const nueva = document.getElementById('new_password')?.value || '';
    if (!validarCampoObligatorio(nueva)) {
        mostrarError('new_password', 'Ingrese una nueva contraseña');
        valido = false;
    } else if (!validarContrasena(nueva)) {
        mostrarError('new_password', 'Mínimo 8 caracteres, una letra y un número');
        valido = false;
    } else {
        limpiarError('new_password');
    }
    
    const confirmar = document.getElementById('confirm_password')?.value || '';
    if (nueva !== confirmar) {
        mostrarError('confirm_password', 'Las contraseñas no coinciden');
        valido = false;
    } else {
        limpiarError('confirm_password');
    }
    
    return valido;
}

// ============================================
// 6. MANEJADORES DE EVENTOS (BOTONES)
// ============================================

async function guardarPerfil() {
    if (!validarFormularioPerfil()) return;
    
    const datos = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        fechaNacimiento: document.getElementById('fecha_nacimiento').value,
        objetivos: document.getElementById('objetivos').value
    };
    
    try {
        await actualizarPerfil(datos);
        mostrarFeedback('Perfil actualizado correctamente', 'success');
        
        // Recargar datos para actualizar la card
        const usuarioActualizado = await obtenerPerfil();
        if (usuarioActualizado) {
            actualizarCardPerfil(usuarioActualizado);
            actualizarFormulario(usuarioActualizado);
        }
    } catch (error) {
        mostrarFeedback(error.message, 'danger');
    }
}

async function guardarPassword() {
    if (!validarFormularioPassword()) return;
    
    const datos = {
        currentPassword: document.getElementById('current_password').value,
        newPassword: document.getElementById('new_password').value
    };
    
    try {
        await cambiarPassword(datos);
        mostrarFeedback('Contraseña cambiada correctamente', 'success');
        
        // Limpiar campos
        document.getElementById('current_password').value = '';
        document.getElementById('new_password').value = '';
        document.getElementById('confirm_password').value = '';
    } catch (error) {
        mostrarFeedback(error.message, 'danger');
    }
}

// ============================================
// 7. INICIALIZACIÓN (SE EJECUTA AL CARGAR)
// ============================================

document.addEventListener('DOMContentLoaded', async function() {
    const token = obtenerToken();
    if (!token) {
        window.location.href = 'login.html';
        return;
    }
    
    const usuario = await obtenerPerfil();
    if (usuario) {
        actualizarCardPerfil(usuario);
        actualizarFormulario(usuario);
    }
    
    const btnGuardar = document.getElementById('btnGuardarPerfil');
    if (btnGuardar) btnGuardar.addEventListener('click', guardarPerfil);
    
    const btnPassword = document.getElementById('btnCambiarPassword');
    if (btnPassword) btnPassword.addEventListener('click', guardarPassword);
});

Modificaciones realizadas: Hice miles de cambios esto solo fue la base para hacerme una idea, las rutas estaban mal, los id estaban mal, muchas cosas estaban mal, las validaciones no eran exactamente lo que necesitaba y las fui arreglando una por una hasta conseguir el codigo final.
Justificación: No sabia escribir javascript.

16.
Herramienta utilizada: Deepseek
Fecha: 12/04/2026
Prompt utilizado: No me cambies todo solo quiero agregar la validacion al nombre

Resultado generado: 

const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// En gestionar_admin.js (validarCamposUsuario)
if (!data.full_name || data.full_name.length < 3) {
    gestionarErrorVisual(idNombre, 'El nombre debe tener al menos 3 caracteres');
    esValido = false;
} else if (!nombreRegex.test(data.full_name)) {
    gestionarErrorVisual(idNombre, 'El nombre solo puede contener letras');
    esValido = false;
} else { 
    gestionarErrorVisual(idNombre, null); 
}

Modificaciones realizadas: No hice.
Justificación: No sabia como escribir la consulta para validar solo letras en el nombre.


17. 


Herramienta utilizada: Deepseek
Fecha: 06/05/2026
Prompt utilizado: Ya, ahora quiero unir todas mis ramas a mi main en github para publicar la pagina

Resultado generado: 
git checkout main
git pull origin main
git merge nombre-de-tu-rama
git push origin main


Modificaciones realizadas: Es una explicacion.
Justificación: No sabia como unir las ramas al main.

18.


Herramienta utilizada: Gemini
Fecha: 09/05/2026
Prompt utilizado: Como hago para que el token se guarde despues del login. Se me guarda como undefined, no quiero usar live server.

Resultado generado: 
Entiendo perfectamente; a veces uno prefiere no llenar el editor de extensiones o simplemente prefiere controlar las cosas desde la terminal. Sin embargo, hay un detalle técnico "invisible" que está bloqueando tu progreso: los navegadores no permiten que un archivo que abres desde una carpeta (file://) le pida datos a un servidor (http://localhost:3000) por seguridad.

Si no quieres usar la extensión de VS Code, tienes otras alternativas muy rápidas usando herramientas que probablemente ya tienes instaladas por tus estudios:
Opción 1: Usando Python (La más recomendada para ti)

Como ya trabajas con Python, puedes levantar un servidor en un segundo desde la terminal sin instalar nada nuevo:

    Abre una terminal en la carpeta donde tienes tus archivos HTML.

    Escribe el siguiente comando y dale a Enter:
    python -m http.server 8000

    Ahora abre tu navegador y escribe: http://localhost:8000/login.html.

Modificaciones realizadas: Niguno, use el comando que me sugeria.
Justificación: Tenia errores con la captacion del token al pasar de una pagina a otra.

19.

Herramienta utilizada: Deepseek
Fecha: 09/05/2026
Prompt utilizado: Ahora necesito corregir el codigo de hacer cambios en el perfil, estoy intentando ingresar cambios pero no se me registran, no aparecen actualizados en la ventana de perfil 

Resultado generado: 
Para que los cambios se reflejen correctamente y tu sitio deje de ser estático, hay tres puntos clave que debemos corregir. El problema principal es que tu Dashboard no tiene código para cargar datos y en la página de Editar Perfil te falta un elemento en el HTML para ver los mensajes de éxito.

Aquí tienes las correcciones paso a paso:
1. Corregir el HTML de editar_perfil_usuario.html

Tu archivo JavaScript busca un elemento llamado feedbackMensaje para avisarte si se guardó bien, pero ese elemento no existe en tu HTML. Además, vamos a ajustar las etiquetas de la tarjeta para que no se borren al actualizar los datos.

Busca la etiqueta <main> y añade esto justo arriba de la sección de perfil:
HTML

<div id="feedbackMensaje" class="alert" style="display: none; margin-top: 10px;"></div>

<main class="container-fluid">
    ...

Modifica la tarjeta de perfil para que los IDs estén en los valores y no borren el título:
HTML

<div class="card-body" style="text-align: center;">
    <img src="Recursos visuales/XiaoChiye_Infobox_MulingMerch.webp" alt="avatar" class="class_img_avatar rounded-circle class_img_perfil">
    <p class="class_p1"><b>Nombre:</b> <span id="perfilNombre">Cargando...</span></p>
    <p class="class_p1"><b>Email:</b> <span id="perfilEmail">Cargando...</span></p>
    <p class="class_p1"><b>Fecha de Nacimiento:</b> <span id="perfilFecha">--/--/----</span></p>
    ...
</div>

2. Hacer que el Dashboard sea dinámico

Actualmente, tu dashboard_usuario.html tiene los datos escritos a mano ("Xiao Chiye"). Si cambias tu nombre en la base de datos, el Dashboard seguirá mostrando lo mismo porque no tiene un script que pida la información actualizada.

Añade este script al final de tu archivo dashboard_usuario.html (antes de cerrar el </body>):
JavaScript

<script>
document.addEventListener('DOMContentLoaded', async function() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    // Pedimos los datos actuales al servidor
    const res = await fetch('http://localhost:3000/api/auth/me', {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    
    if (res.ok) {
        const usuario = await res.json();
        // Actualizamos los textos del dashboard con los datos reales
        document.querySelector('.class_h4').textContent = `¡Bienvenido, ${usuario.nombre}!`;
        // Aquí puedes añadir IDs a los <p> del dashboard para actualizarlos también
    }
});
</script>

3. Ajuste en editar_perfil.js

En tu función actualizarCardPerfil, el código usa .textContent. Si no usaste el paso 1 (añadir los <span>), el código borrará la palabra "Nombre:" y solo dejará el valor.

Asegúrate de que tu función se vea así para manejar los nuevos <span>:
JavaScript

function actualizarCardPerfil(usuario) {
    const nombreElement = document.getElementById('perfilNombre');
    const emailElement = document.getElementById('perfilEmail');
    const fechaElement = document.getElementById('perfilFecha');
    
    if (nombreElement) nombreElement.textContent = usuario.nombre;
    if (emailElement) emailElement.textContent = usuario.email;
    if (fechaElement) fechaElement.textContent = formatearFecha(usuario.fechaNacimiento);
    
    // ... resto de la lógica de objetivos
}

¿Por qué no se registraban los cambios?

    Sin Feedback: Al no existir el div feedbackMensaje, si el servidor daba un error (por ejemplo, formato de fecha incorrecto), nunca te enterabas porque la función mostrarError fallaba silenciosamente.

    Dashboard Estático: Los cambios sí se registraban en la base de datos, pero como el Dashboard es puro texto HTML fijo, no los mostraba.


Modificaciones realizadas: Tome cosas de aqui pero todas necesitaron realizarles modificaciones para conectar con la API y con el html que ya cree
Justificación: Debug

20. 

Herramienta utilizada: Gemini
Fecha: 09/05/2026
Prompt utilizado: Me sale error 304 en el backend 
Resultado generado: 
El código 304 (Not Modified) es muy curioso porque, técnicamente, no es un error, sino un mensaje de "ahorro de energía" del navegador. Sin embargo, en tu caso es el culpable de que no veas tus cambios reflejados.

Aquí te explico el porqué técnico de este comportamiento:
1. ¿Qué significa realmente el 304?

Cuando tu navegador pide datos al servidor (por ejemplo, con la función obtenerPerfil), el servidor responde: "Oye, los datos que me pides son exactamente los mismos que ya tienes guardados en tu memoria temporal (caché). No te voy a enviar nada nuevo, usa la copia que ya tienes".

El problema: Si tú acabas de guardar un cambio (como cambiar tu nombre), pero el navegador "cree" que los datos son iguales, te mostrará la versión antigua que tiene guardada en su memoria y tus cambios parecerán invisibles.
2. ¿Por qué ocurre esto en tu proyecto?

Esto pasa principalmente por la Caché del Navegador. El navegador intenta ser eficiente y no descargar cosas dos veces para ahorrar internet y tiempo.

    El mecanismo: El navegador envía una etiqueta (llamada ETag) al servidor. El servidor la compara y, si decide que "nada ha cambiado", devuelve el 304.

    El fallo en tu flujo: Tú haces un PUT para guardar datos, pero cuando inmediatamente después haces el GET para refrescar la pantalla, el navegador se apresura y usa la copia vieja antes de que el servidor se dé cuenta de que debe enviarte la nueva.

3. Cómo "obligar" al navegador a ser honesto

Para solucionar esto y que tu sitio sea profesional, tienes que decirle al navegador: "No me des copias viejas, quiero los datos frescos directamente de la base de datos".

Esto se hace modificando los Headers (encabezados) en tu función fetch.

El cambio lógico en editar_perfil.js:
En la función obtenerPerfil, añade una instrucción para desactivar la caché:
JavaScript

async function obtenerPerfil() {
    const token = obtenerToken();
    if (!token) return null;
    
    const res = await fetch('http://localhost:3000/api/auth/me', {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${token}`,
            // ESTO ELIMINA EL ERROR 304:
            'Cache-Control': 'no-cache', 
            'Pragma': 'no-cache'
        }
    });
    
    // ... resto del código
}

4. ¿Por qué esto lo arregla?

    Cache-Control: no-cache: Esta línea le prohíbe al navegador usar su memoria interna. Lo obliga a ir hasta el servidor y traer los datos reales de la base de datos cada vez.

    Integridad de Datos: Como estudiante de computación, esto te garantiza que lo que el usuario ve en el DOM (la pantalla) es exactamente lo que está registrado en el Backend.

Modificaciones realizadas: Es una explicacion.
Justificación: No sabia como unir las ramas al main.


















