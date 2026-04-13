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













