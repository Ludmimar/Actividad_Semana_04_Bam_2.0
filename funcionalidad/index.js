/* DECLARO UN UN ELEMENTO HEADER Y FOOTER PARA QUE EN EL CASO QUE UTILICE VARIAS HOJAS HTML, PUEDO DECLAR UNA SOLA 
VEZ ESTAS SECCIONES QUE SE REPITEN EN CADA UNA DE MIS PAGINAS

document.getElementById("idheader") >> Aquí estamos buscando un elemento en el documento HTML con un "id" específico. Un "id" es como un nombre 
especial que le das a un elemento para que puedas encontrarlo fácilmente. En este caso, estamos buscando un 
elemento que tiene el "id" llamado "idheader". 

.innerHTML = ...`:** Una vez que hemos encontrado el elemento con el "idheader", estamos accediendo a su 
contenido interno, lo que está "dentro" del elemento. Estamos reemplazando ese contenido con lo que viene a 
continuación.

Lo que viene entre las dos comillas invertidas es una forma especial de escribir texto. Permite incluir múltiples 
líneas y también agregar valores dentro del texto usando ${}.
Dentro de estas llaves coloco codigo html */
////https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
////https://www.w3schools.com/jsref/prop_html_innerhtml.asp
document.getElementById("idheader").innerHTML = ` 
<img id="logo" src="../Kit_Tema_1/1-logo-negro.png" alt="Logo-Cabecera">
        <h1 class="titulo"> Beauty </h1>
`
document.getElementById("footer").innerHTML = `
<footer class="footer">
    <a href="#inicio">
        <button class="boton-footer">
            <box-icon class="icon" name='home-alt-2' type='solid' color='#ffffff'></box-icon>
            <h6 class="icon">Inicio</h6>
        </button>
    </a>    
    <a href="#servicios">
        <button class="boton-footer">
            <box-icon name='category' type='solid' color='#ffffff' ></box-icon>
            <h6 class="icon">Servicios</h6>
        </button>
    </a>
    <a href="#tips">
        <button class="boton-footer">
            <box-icon name='select-multiple' color='#ffffff' ></box-icon>
            <h6 class="icon">Tips</h6>
        </button>
    </a>
    <a href="#carrito">
        <button class="boton-footer">
            <box-icon class="icon" name='cart' color='#ffffff'></box-icon>
            <h6 class="icon">Carrito</h6>
        </button>
    </a>
    <a href="#contacto">
        <button class="boton-footer">
            <box-icon name='contact' type='solid' color='#ffffff' ></box-icon>
            <h6 class="icon">Contacto</h6>
        </button>
    </a>
</footer>
`