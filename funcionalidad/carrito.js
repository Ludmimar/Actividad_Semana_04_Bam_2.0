/* FUNCIONALIDAD DEL CARRITO
Vamos a crear una seccion de productos que nos permita ver una lista de productos, agregarlos a un carrito 
de compras y calcular el total de la compra. Ahora veremos el paso a paso de como realizarlo:

*************************************************************************************************************
--> EL CODIGO QUE APARECE AQUI TE EXPLICA COSAS TEORICAS DE CASA COMPONENTE UTILIZADO EN ESTE ARCHIVO JS
// La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada 
// al contenido de la página web, a su vez describe las propiedades y métodos comunes para cualquier 
// tipo de documento. 
// Para mas info: --> https://developer.mozilla.org/es/docs/Web/API/Document

// Esto significa que el código dentro de las llaves {...} luego de mi linea:
// document.addEventListener('DOMContentLoaded', () =>{...}
// se ejecutará cuando todo el contenido de la  página web haya sido cargado.*/
//*************************************************************************************************************
/*document.addEventListener('DOMContentLoaded', () => {...});: Esto le dice al programa que espere hasta 
que todo esté listo en la página antes de hacer cualquier cosa. Como si le dijera: "Espera a que todos 
los elementos estén en su lugar antes de continuar"*/

document.addEventListener("DOMContentLoaded", () => {
  /*const baseDeDatos = [...];: Aquí hay una lista especial donde se almacenan los detalles de varios productos.
Cada conjunto de llaves {} dentro de baseDeDatos representa un producto diferente.
En este caso hay 6 productos en total, cada uno con su propio identificador, nombre, precio e imagen.
>> id es un número que identifica de manera única cada producto.
>> nombre es el nombre del producto, como "Labial" o "Delineador".
>> precio es cuánto cuesta ese producto, como $50.
>> imagen es el nombre del archivo de imagen que muestra cómo se ve el producto.
En resumen, este bloque de código crea una lista con detalles de diferentes productos de maquillaje que se 
venderían en la tienda. Son los productos que voy a mostrar en mi carrito de compras.*/
  // Variables
  const baseDeDatos = [
    {
      id: 1,
      nombre: "Labial",
      precio: 50,
      imagen: "https://github.com/Ludmimar/Actividad_Semana_04_Bam_2.0/blob/main/img/labial.jpg?raw=true",
    },
    {
      id: 2,
      nombre: "Delineador",
      precio: 28,
      imagen: "https://raw.githubusercontent.com/Ludmimar/Actividad_Semana_04_Bam_2.0/main/img/delineador.jpg",
    },
    {
      id: 3,
      nombre: "Sombra",
      precio: 85,
      imagen: "https://raw.githubusercontent.com/Ludmimar/Actividad_Semana_04_Bam_2.0/main/img/sombraOjos.webp",
    },
    {
      id: 4,
      nombre: "Rimel",
      precio: 150,
      imagen: "https://raw.githubusercontent.com/Ludmimar/Actividad_Semana_04_Bam_2.0/main/img/rimel.png",
    },
    {
      id: 5,
      nombre: "Esmalte",
      precio: 30,
      imagen: "https://raw.githubusercontent.com/Ludmimar/Actividad_Semana_04_Bam_2.0/main/img/esmalte.png",
    },
    {
      id: 6,
      nombre: "Rubor",
      precio: 65,
      imagen: "https://raw.githubusercontent.com/Ludmimar/Actividad_Semana_04_Bam_2.0/main/img/rubor.webp",
    },
  ];

  /************************************************************************************************************************* */
  /*
    // DECLARACION DE VARIABLES EN JAVASCRIPT
    // VARIABLE LET: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let 
    // VARIABLE CONST: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const 
    Aqui voy a crear mi cesta vistual donde puedes poner los productos que deseas comprar. Inicialmente, está vacía, 
    pero a medida que eliges productos, se añaden a esta cesta.
    // Array: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array    
    Lo que hago a continuacion es declarar en mi codigo un espacio de memoria, una cajita o cesta donde quiero que
    se vayan agregando luego los productos que seleccione mas adelante*/
  let carrito = [];

  /*A continuacion voy a declarar desde el inicio, datos que voy a necesitar utilizar varias veces en mi codigo.
    De esta manera los declaro con algun nombre significativo (de lo que representan) para luego poder llamarlos
    en las diferentes secciones de mi codigo. Aqui tambien lo que estaria realizando es armar cajas con datos predefinidos
    y que van a ser simpre constantes, por lo que no se van a alterar a lo largo de mi codigo*/

  const divisa =" $ "; /* Aquí creamos una variable llamada "divisa" que representa la moneda que se utiliza en la tienda.
    En este caso, es el símbolo "$" de pesos. */
    //// Document.querySelector: https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
    //// querySelector busca el primer elemento de mi html que coincida con selector CSS que le paso por parentesis->()
    //// en este  caso le paso #items ya que es el id que le declare a la seccion main adonde quiero apuntar en mi archivo HTML.    
  const DOMitems =document.querySelector("#items"); /* Piensa en esto como un puntero (querySelecttor) a una etiqueta en la página web(items), 
    adonde voy a mostrar los productos disponibles para comprar. Cuando la computadora necesita mostrar o cambiar los productos, 
    sabe dónde encontrarlos en la página usando este puntero. 
    */

  const DOMcarrito =
    document.querySelector("#carrito"
    ); /* Esto es similar al punto anterior, pero se refiere a la parte de la página donde se mostrarán los productos que has 
    agregado a tu cesta virtual. Es como el lugar donde puedes ver los productos que has decidido comprar. */

  const DOMtotal =
    document.querySelector("#total"); /* Aquí configuro otro puntero a una etiqueta en la página. Esta etiqueta 
    mostrará el costo total de los productos en tu cesta.*/

  const DOMbotonVaciar =
    document.querySelector("#boton-vaciar"); /*Esto es un puntero a un botón en la página que te permitira vaciar
    completamente tu cesta de compras. Si decides no comprar nada en ese momento, puedes usar este botón para "vaciar" todo lo que 
    pusiste en tu cesta virtual. */

    /************************************************************************************************************************* */
    /*
    // Funciones -->  Una función es como un conjunto de pasos que se pueden ejecutar cuando necesitas hacer algo específico.
    // Funciones en Js: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
    Comenzamos declarando una funcionalidad para poder armar la forma en que queremos que se vean nustros productos en la tienda:
    Primero vamos a dibujar en nuestra web, en nuestro liezo ,todos los productos a partir de la base de datos. 

    ¡¡¡¡¡¡¡¡¡  No confundir con el carrito !!!!!!!!!!!

    Para el siguiente paso imagina que estás armando una vitrina de productos en la tienda virtual. Lo que sigue a continuacion es 
    como una receta que te dice cómo mostrar cada producto en la página:
    Para cada producto en la lista de productos de la tienda: (de mi base de datos)
    >> Crea una "caja" virtual para el producto. Imagina que estás haciendo una tarjeta con espacio para poner información del
    producto.
    >> Decora esta caja para que se vea como una tarjeta en la tienda.
    >> Escribe el nombre del producto en la tarjeta.
    >> Muestra una imagen del producto en la tarjeta.
    >> Escribe el precio del producto en la tarjeta, añadiendo el símbolo de la moneda al final.
    >> Agrega un botón en la tarjeta que dice "Agregar +".
    >> Haz que cuando alguien haga clic en el botón, el producto se agregue al carrito de compras.
    >> Une todas estas partes de la tarjeta y ponla en la vitrina de productos en la página web.
    Es como si estuvieras armando un cartelito bonito para cada producto, con su nombre, imagen, precio y un botón para agregarlo 
    al carrito. 
    Luego, estos cartelitos se colocan uno al lado del otro en la página de la tienda, para que los visitantes puedan ver y comprar 
    los productos de manera fácil.
    
    */

  function renderizarProductos() {
    /*// //Metodo forEach: https://www.freecodecamp.org/espanol/news/tutorial-de-javascript-arrayforeach-como-iterar-a-traves-de-elementos-en-un-arreglo/
        Digamos que ahora necesitamos leer los datos que tengo guardados en mi base de datos para mostrarlos en la vidriera de mi 
        tienda como dijimos anteriormente: Como los productos los almacene en una sola caja llamada baseDeDatos, pero dentro de 
        esta caja tengo mas cajitas con cada uno de mis productos con distintos atributos o elementos, como dijimos el id, 
        nombre, etc, vamos a utilizar un metodo que viene por defecto en Javascript que nos permite poder recorrer mi base de datos,
        producto por producto y hacer algo con cada uno de ellos. (en este caso mostrarlos en mi vidriera o tienda) 
        Aquí comienza un bucle que recorre cada elemento (producto) en la lista baseDeDatos. Por cada producto, se ejecutará el 
        código dentro de las llaves {}. */

    /*llamo a mi base de datos declarada anteriormente, luego con el punto(.)puedo llamar a la funcion forEach, y entre parentesis 
    le declaro el nombre de variable que va a ir recorriendo cada uno de los productos de mi case de datos, con el cual voy a 
    poder acceder a los datos de dicho producto, como el nombre, precio, etc*/
    baseDeDatos.forEach((info) => {
      //// Para dar estilos a cada componente de mi carrito, utilizo las clases que ya vienen predefinidas en BOTSTRAP
      ////       https://bootstrapshuffle.com/es/classes 
      // Estructura
      /* Aquí se crea un elemento HTML <div> , un contenedor que se utilizará para mostrar un producto. Es como si estuvieras 
      preparando un espacio para mostrar la información del producto.
     */ 
      //// document.createElement>> es un método en JavaScript que se utiliza para crear un nuevo elemento HTML en el Document Object 
      //// Model (DOM).
      //// https://developer.mozilla.org/es/docs/Web/API/Document/createElement
      const miNodo = document.createElement("div");

      /*Se le añaden las clases CSS 'card' y 'col-sm-4' al elemento <div>. Esto le da el estilo visual de una tarjeta y ajusta 
      el diseño para que cada producto ocupe un tercio del ancho en dispositivos pequeños. */
      //// HTML DOM Element classList >> https://www.w3schools.com/jsref/prop_element_classlist.asp
      miNodo.classList.add("card", "col-sm-4");

      // Body
      /*Aquí se crea otro elemento <div> que será el cuerpo de la tarjeta del producto. Esto es como el área principal donde se 
      colocarán los detalles del producto. */
      const miNodoCardBody = document.createElement("div");

      /*Se añade la clase 'card-body' al elemento del cuerpo de la tarjeta. Esto aplica el estilo visual adecuado para el cuerpo 
      de la tarjeta. */
      miNodoCardBody.classList.add("card-body");

      // Titulo
      /*Aquí se crea un elemento <h5> que se utilizará para mostrar el título del producto. Es como el encabezado principal del 
      producto. */
      const miNodoTitle = document.createElement("h5");

      /*Se añade la clase 'card-title' al elemento del título. Esto aplica el estilo visual adecuado para el título de la tarjeta. */
      miNodoTitle.classList.add("card-title");

      /* Se establece el contenido del título del producto usando el nombre del producto almacenado con info.nombre.
      (info en como llame al puntero que puede ir ingresando a cada una de las caracteristicas de mis productos) */
      miNodoTitle.textContent = info.nombre;

      // Imagen
      /* Aquí se crea un elemento <img> que se utilizará para mostrar la imagen del producto. Es como el espacio donde se colocará 
      la imagen del producto. */
      const miNodoImagen = document.createElement("img");

      /*Se añade la clase 'img-fluid' al elemento de la imagen. Esto asegura que la imagen se ajuste de manera adecuada y responda
      al tamaño de la pantalla. */
      miNodoImagen.classList.add("img-fluid");

      /*Se establece el atributo src de la imagen para que muestre la imagen del producto. La URL de la imagen se toma de 
      info.imagen, que es parte de la información del producto. */
      //// Element.setAttribute >> https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute
      miNodoImagen.setAttribute("src", info.imagen);

      // Precio
      /* Se crea un elemento <p> que se utilizará para mostrar el precio del producto. Es como un párrafo donde se mostrará el precio. */
      const miNodoPrecio = document.createElement("p");

      /*Se añade la clase 'card-text' al elemento del precio. Esto aplica el estilo adecuado para el texto del precio en la tarjeta. */
      miNodoPrecio.classList.add("card-text");

      /*Se establece el contenido del elemento de precio. Se combina el precio del producto (info.precio) con el símbolo de la divisa 
      (divisa declarada en un princpio) y se muestra en el párrafo. */
      
      // //Interpolacion: https://www.freecodecamp.org/espanol/news/como-utilizar-la-interpolacion-de-cadenas-en-javascript/
      
      miNodoPrecio.textContent = `${info.precio}${divisa}`;

      // Boton
      /*Se crea un elemento <button> que se utilizará para el botón de "Agregar". Esto es como el botón que se presiona para agregar el producto al carrito. */
      const miNodoBoton = document.createElement("button");

      /*Se añaden las clases 'btn' y 'btn-primary' al botón. Esto le da el aspecto visual de un botón y aplica un estilo de color primario de Bootstrap (Azul) */
      miNodoBoton.classList.add("btn", "btn-primary");

      /* Se establece el texto del botón como "Agregar +". Esto es lo que se muestra en el botón. */
      miNodoBoton.textContent = "Agregar +";

      /* Se establece un atributo personalizado llamado 'marcador' en el botón. Este atributo almacena el id del producto (info.id). 
            Resulta útil para identificar el producto específico cuando se hace clic en el botón. */
      miNodoBoton.setAttribute("marcador", info.id);

      /*
      // Eventos : https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
      Los eventos son acciones que realiza el usuario a las que podemos “atender” desde JavaScript e indicar qué función o bloque 
      de código se debe ejecutar como respuesta. Estos eventos permiten interactuar con el usuario, por ejemplo cuando hace clic 
      en un botón.             
      Se agrega un evento de escucha al botón. Cuando el botón es cliqueado (click), se ejecutará la función aniadirProductoAlCarrito. 
      Esto significa que cuando alguien hace clic en el botón "Agregar", el producto se agregará al carrito. 
      Esta funcion (aniadirProductoAlCarrito) esta explicada mas adelante en el codigo*/
      miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);

      // Insertamos
      /* Aquí se agregan los elementos (imagen, título, precio, botón) al cuerpo de la tarjeta. Estos elementos se colocan uno debajo 
      del otro en la tarjeta..
      // https://www.w3schools.com/jsref/met_node_appendchild.asp
      // El appendChild()método agrega un nodo (elemento) como último hijo de un elemento. 
            
      Colocamos cada elemento como hijo al cuerpo de mi tarjeta*/
      miNodoCardBody.appendChild(miNodoImagen); // Imagen
      miNodoCardBody.appendChild(miNodoTitle); // Titulo
      miNodoCardBody.appendChild(miNodoPrecio); // Precio
      miNodoCardBody.appendChild(miNodoBoton); // Boton "Agregar"

      /* El cuerpo de la tarjeta completo se agrega al cartón principal del producto (miNodo). */
      miNodo.appendChild(miNodoCardBody);

      /* Finalmente, la tarjeta del producto completa se agrega a la parte de la página web donde se muestran los productos (DOMitems). 
      Es como poner la tarjeta en la vitrina de productos en la página de la tienda. */
      DOMitems.appendChild(miNodo);
    });
  }

  /************************************************************************************************************************* */
  /* AHORA VAMOS A CREAR LA FUNCIONALIDAD PARA AGREGAR PRODUCTOS AL CARRITO
    Este código es como el movimiento que haces para poner el producto en el carrito:
    Cuando haces clic en el botón "Agregar +" de un producto: Agarras el producto y lo pones en tu carrito.
    Luego, actualizas tu carrito para mostrar el nuevo producto.
    Es como cuando tomas un juguete de la tienda y lo pones en tu canasta de compras, y después miras tu canasta para ver todos los 
    juguetes que has elegido.
    
    Aca se define una función llamada aniadirProductoAlCarrito que se ejecuta cuando haces clic en el botón "Agregar +" de un 
    producto. (explicado arriba)
    La palabra evento es como una señal que le dice a la función que algo ha sucedido, en este caso, el clic en el botón.*/

    //// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

  function anyadirProductoAlCarrito(evento) {

    // Añadimos el Nodo a nuestro carrito
    /*Aquí, tomas el "evento" que sucedió (hacer clic en el botón) y obtienes el atributo 'marcador' del botón. Este atributo lleva 
    información sobre qué producto se está agregando. Luego, este producto se agrega al "carrito" virtual. Piensa en el carrito como 
    una bolsa donde pones cosas que quieres comprar. 
    Recuerda que carrito es la caja que defini al principio de mi codigo, a la cual como la asigne como un lugar de memoria que va 
    a almacenar un conjunto de elementos (productos que agregue al carrito), con el metodo push de JS puedo agregar el producto 
    seleccionado de mi vitrina al carrito uno detras de otro,
    ya que estoy tomando el marcador que le cree a cada uno de mis productos por su numero identificador (id) el cual es un numero 
    irrepetible.*/
    // // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    // //https://www.w3schools.com/jsref/event_target.asp
    carrito.push(evento.target.getAttribute("marcador"));

    // Actualizamos el carrito
    /* Después de poner el producto en el carrito, se llama a una función llamada renderizarCarrito(). Esto es como decir 
    "actualiza y muestra mi carrito de compras". Esta función se encargará de mostrar los productos que has agregado en la parte 
    de la página donde aparece el carrito. Mas adelante explico este metodo*/
    renderizarCarrito();
  }

  /************************************************************************************************************************* */

  /*  METODO PARA DIBUJAR TODOS LOS PRODUCTOS GUARDADOS EN EL CARRITO  
    Imagina que estás mirando los productos que has elegido en tu carrito de compras. Este código es como el trabajo que se hace 
    para mostrarte los productos y el precio total:
    > Primero, quitamos todo lo que había antes en la lista de productos del carrito.
    > Luego, revisamos los productos que has elegido y quitamos los que se repiten, para que solo veas uno de cada tipo.
    > Por cada producto que tienes en tu carrito:
        - Vamos a la lista de productos disponibles y encontramos la información de ese producto.
        - Contamos cuántas veces elegiste ese producto.
        - Creamos un recuadro en el que mostramos cuántos de esos productos tienes, su nombre, su precio y un botón para eliminarlo.
        - Ponemos todo esto en la lista de productos del carrito.
    > Finalmente, mostramos el precio total de todos los productos en tu carrito.

    Es como si alguien estuviera organizando los productos que has elegido, contando cuántos hay de cada uno y calculando el precio 
    total. Este código te ayuda a ver lo que estás a punto de comprar y cuánto vas a gastar en total. Es como cuando ves todos los 
    productos que has elegido en una tienda antes de pagar.
    
    Declaro una funcion para llamar cada vez que necesite actualizar los productos de mi carrito
    Con este metodo evito que un producto seleccionado, mas de una vez, se duplique en mi carrito y que solo incremente la cantidad 
    si selecciono el mismo mas de una vez*/
  function renderizarCarrito() {
    /* Esto borra cualquier contenido previo en la parte de la página donde se muestra tu carrito. Es como si estuvieras limpiando la mesa 
        antes de poner nuevos productos en tu carrito.*/
    DOMcarrito.textContent = "";
    // Quitamos los duplicados
    /*Aquí se crea una nueva lista llamada carritoSinDuplicados. Esta lista contiene los mismos productos que tienes en tu carrito,
    pero sin productos duplicados. Es como si alguien estuviera quitando los productos repetidos para que solo veas uno de cada tipo. */
    /*
    //  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
     */
    const carritoSinDuplicados = [...new Set(carrito)];

    // Generamos los Nodos a partir de carrito
    /*Aquí comienza un bucle que recorre cada elemento (producto) en la lista carritoSinDuplicados. Por cada producto, se ejecutará el 
    código dentro de las llaves {}. */
    carritoSinDuplicados.forEach((item) => { // //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      // Obtenemos el item que necesitamos de la variable base de datos
      /* Aquí se busca el producto correspondiente en la lista baseDeDatos (que contiene todos los productos disponibles). Se utiliza
      el metodo filter de JS para encontrar el producto que tenga la misma ID que el producto en el carrito. Esto es como si alguien 
      fuera a la estantería de la tienda y buscara los productos que se repitan. */
      const miItem = baseDeDatos.filter((itemBaseDatos) => { ////https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      
      // ¿Coincide las id? Solo puede existir un caso por producto
      /* Esta línea verifica si la ID del producto en la lista baseDeDatos coincide con la ID del producto en el carrito (convertida 
      a un número entero). Si coinciden, se obtiene ese producto. */
        return itemBaseDatos.id === parseInt(item); ////https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt
      });

      // Cuento el número de veces que se repite el producto
      /* Aquí se utiliza la función reduce para contar cuántas veces aparece un producto en el carrito. La variable total 
      llevará la cuenta mientras recorremos la lista carrito. */
      const numeroUnidadesItem = carrito.reduce((total, itemId) => { ////https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        // ¿Coincide las id? Incremento el contador, en caso contrario lo mantengo
        /* En cada paso, se verifica si la ID del producto (itemId) coincide con el producto actual que estamos revisando (item). 
        Si coinciden, incrementamos el contador en 1; si no coinciden, mantenemos el contador igual. */
        return itemId === item ? (total += 1) : total; ////https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator
      }, 0);

      // Creamos el nodo del item del carrito
      /*Actualizamos el carrito con todos los productos y la cantidad de cada uno 
      Aquí se crea un elemento de lista <li> que se utilizará para mostrar un producto en el carrito. Es como una línea en la 
      lista de productos que has elegido.*/
      const miNodo = document.createElement("li");
      miNodo.classList.add("list-group-item", "text-right", "mx-2");//Se añaden las clases CSS al elemento de la lista. Esto le da un estilo visual específico.
      /* Se establece el contenido del elemento de la lista. Muestra cuántos productos tienes de ese tipo (numeroUnidadesItem),
      el nombre del producto (miItem[0].nombre), su precio (miItem[0].precio) y el símbolo de la divisa (divisa). */
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

      // Boton de borrar
      /* Aquí se crea un elemento <button> que se utilizará para el botón de eliminar un producto del carrito. Es como un 
      botón que puedes presionar para quitar un producto de tu carrito. */
      const miBoton = document.createElement("button");
      miBoton.classList.add("btn", "btn-danger", "mx-5"); //Se añaden las clases CSS 
      miBoton.textContent = "X";//Se establece el contenido del botón como una "X".
      miBoton.style.marginLeft = "1rem";//Se aplica un estilo para añadir un margen a la izquierda del botón
      miBoton.dataset.item = item; /*Se agrega un atributo de datos llamado 'item' al botón. Este atributo guarda la ID del 
      producto, para que cuando hagas clic en el botón, el código sepa qué producto eliminar. */
      /*Se agrega un evento de escucha al botón. Cuando haces clic en este botón, se ejecuta una función llamada borrarItemCarrito, 
      que se encargará de eliminar el producto del carrito. (funcion explicada mas abajo) */
      miBoton.addEventListener("click", borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton); //Aquí se agrega el botón de eliminar al elemento de la lista que creamos anteriormente 
      /* Finalmente, se agrega el elemento de la lista completo al lugar en la página donde se muestra tu carrito (DOMcarrito). 
      Es como poner el producto y su botón de eliminar en tu lista de compras. */
      DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    /* Aquí se actualiza el contenido en la parte de la página donde se muestra el precio total (DOMtotal). Se llama a la 
    función calcularTotal()(Explciado mas abajo) que calcula el precio total de todos los productos en el carrito y lo muestra en 
    la página. */
    DOMtotal.textContent = calcularTotal();
  }
/************************************************************************************************************************* */
  /* EVENTO PARA BORRAR UN ELEMENTO DEL CARRITO
  Esta función se ejecuta cuando presionas el botón "X" para eliminar un producto del carrito.
  Cuando presionas el botón "X" para eliminar un producto:
    Se descubre cuál es el producto que quieres eliminar, usando un número especial.
    Se buscan todos los productos en tu carrito y se eliminan los que coinciden con el producto que quieres quitar.
    Después de quitar el producto, se muestra nuevamente tu carrito actualizado en la página.*/
  function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    /* Aquí, se obtiene la ID (identificador) única del producto que deseas eliminar. Esta ID se encuentra en el atributo 
    personalizado dataset.item del botón "X" que presionaste. Piensa en esto como un código especial para saber qué producto 
    exacto deseas quitar. */
    const id = evento.target.dataset.item; ////https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    // Borramos todos los productos
    /* Aquí, se está actualizando la lista carrito de productos. Se utiliza la función filter para quitar el producto que deseas 
    eliminar. */
    carrito = carrito.filter((carritoId) => {
      /*En cada paso, se verifica si la ID del producto actual en la lista carrito no coincide con la ID del producto que deseas
      eliminar (id). Si no coinciden, el producto se mantiene en la lista; si coinciden, el producto se elimina. */
      return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
  }
/************************************************************************************************************************* */
  /* CALCULA EL PRECIO TOTAL TENIENDO EN CUENTA LOS PRODUCTOS REPETIDOS
  Se toma cada producto en tu carrito:
    Se busca ese producto en una lista de todos los productos disponibles en la tienda.
    Se suma el precio de ese producto al total.
    Después de sumar el precio de todos los productos, se redondea el total a dos decimales para que se vea bien.*/
  function calcularTotal() { // Esta función se encarga de calcular el precio total de todos los productos en tu carrito.
    // Recorremos el array del carrito
    /*Aquí comienza el cálculo. Se utiliza la lista carrito que contiene los IDs de los productos que has elegido.
    .reduce((total, item) => {: Aquí se utiliza la función reduce para sumar los precios de todos los productos en el carrito. 
    La variable total llevará la cuenta mientras se recorre la lista carrito. */
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        /*Aquí, para cada producto en el carrito, se busca el producto correspondiente en la lista baseDeDatos que contiene 
        todos los productos disponibles. Se utiliza filter para encontrar el producto que tenga la misma ID que el producto en 
        el carrito. */
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
          /*Esta línea verifica si la ID del producto en la lista baseDeDatos coincide con la ID del producto en el carrito 
          (convertida a un número entero). Si coinciden, se obtiene ese producto. */
          return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        /*Después de encontrar el producto en la lista baseDeDatos, se suma su precio al total acumulado. */
        return total + miItem[0].precio;
        //al final de la función reduce es el valor inicial de total. Inicialmente, el total se establece en 0.
      }, 0)
      /*Una vez que se suma el precio de todos los productos, el resultado se redondea a dos decimales. Esto es para que el 
      número se vea ordenado, como si se tratara de dinero. */
      .toFixed(2);
  }
/************************************************************************************************************************* */
  /*VACIAR EL CARRITO Y VOLVER A DIBUJARLO
  Se quitan todos los productos que tenías en tu carrito, como si los sacaras todos.
  Luego, se muestra tu carrito vacío en la página.
  Esta función se ejecuta cuando decides vaciar todos los productos de tu carrito de compras.*/
  function vaciarCarrito() {
    // Limpiamos los productos guardados
    /* Aquí, se vacía la lista carrito eliminando todos los productos que tenías. Es como si estuvieras sacando todos los productos 
    de tu canasta de compras en la tienda.*/
    carrito = [];
    // Renderizamos los cambios
    //Luego de vaciar el carrito, se llama a la función 
    renderizarCarrito();
  }
/************************************************************************************************************************* */
  // Eventos
  /*Cuando haces clic en el botón "Vaciar Carrito":
    Quitas todos los productos que tenías en tu carrito de compras, dejando tu carrito vacío.
  Cuando llegas a la página:
    Se muestran todos los productos disponibles en la tienda.
    Se muestra tu carrito de compras actual, con los productos que has elegido. 
    
  Aquí se establece un evento. Cuando haces clic en el elemento del botón que representa el "Vaciar Carrito", 
  se ejecuta la función vaciarCarrito(), que vacía todos los productos del carrito. Es como si hubiera un botón en la tienda 
  que, cuando presionas, vacía tu canasta de compras.*/

  DOMbotonVaciar.addEventListener("click", vaciarCarrito);

  // Inicio
  /* Esta línea llama a la función renderizarProductos(). Esta función se encarga de mostrar todos los productos disponibles en 
  la tienda. Imagina que cuando entras en la tienda, ves todos los productos en los estantes. */
  renderizarProductos();

  /*Esta línea llama a la función renderizarCarrito(). Esta función muestra los productos que has elegido en tu carrito de compras. 
  Imagina que cuando entras en la tienda, también puedes ver los productos que has agregado a tu canasta de compras. */
  renderizarCarrito();
});
