# Beauty Makeup - Página Web de Belleza

## Descripción
Beauty Makeup es una página web interactiva dedicada al cuidado personal y la belleza facial. Permite a los usuarios explorar servicios, tips de belleza y productos de maquillaje, con la posibilidad de agregar productos a un carrito de compras dinámico y visualizar el total de la compra.

El proyecto utiliza **HTML, CSS, JavaScript y Bootstrap**, y está diseñado para brindar una experiencia de usuario atractiva, moderna y responsive.

---

## Características Principales

1. **Secciones de la Página**
   - **Inicio**: Presentación de la marca con imágenes y descripción.
   - **Servicios**: Listado de servicios ofrecidos (perfilado de cejas, pestañas, maquillaje profesional, depilación y botox facial).
   - **Tips de Belleza**: Carrusel con consejos y recomendaciones para el cuidado del rostro.
   - **Carrito de Compras**: Visualización de productos de maquillaje, posibilidad de agregar al carrito, eliminar productos y calcular total.
   - **Contacto**: Formulario de contacto con nombre y correo electrónico, además de links a redes sociales.

2. **Carrito de Compras Dinámico**
   - Renderiza productos desde un array de datos (`baseDeDatos`).
   - Permite agregar productos haciendo clic en “Agregar +”.
   - Muestra cantidad de productos y precio total.
   - Permite eliminar productos individualmente o vaciar todo el carrito.
   - Maneja productos repetidos incrementando la cantidad en lugar de duplicarlos.

3. **Componentes Reutilizables**
   - Header y Footer definidos con `innerHTML` para poder reutilizarlos en múltiples páginas.
   - Uso de `document.addEventListener('DOMContentLoaded', ...)` para garantizar que los scripts se ejecuten después de cargar la página.

4. **Diseño y Estilo**
   - Uso de **Bootstrap 5** para diseño responsive.
   - Tipografías personalizadas con **Daydream** y **Alike**.
   - Carrusel de tips de belleza.
   - Uso de iconos con **Boxicons**.

---

## Tecnologías Utilizadas
- **HTML5** - Estructura de la página.
- **CSS3** - Estilos personalizados.
- **JavaScript** - Funcionalidad interactiva, carrito de compras.
- **Bootstrap 5** - Diseño responsive y componentes UI.
- **Boxicons** - Iconos para navegación y redes sociales.

---

## Instalación y Uso


Abrir el archivo index.html en un navegador moderno.

Navegar por las secciones, explorar servicios, tips de belleza y productos.

Agregar productos al carrito y verificar el total.

Usar el formulario de contacto para enviar información de prueba.

## Licencia

Este proyecto está destinado a fines educativos y personales. No tiene licencia comercial.

📌 Autor

Martos Ludmila
#### [Linkedin](https://www.linkedin.com/in/ludmimar89/)

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Ludmimar/Actividad_Semana_04_Bam_2.0.git
```

