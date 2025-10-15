# 💄 Beauty Makeup - Tienda de Belleza Interactiva

> Una página web moderna y responsive dedicada al cuidado personal y la belleza facial, con carrito de compras dinámico implementado en JavaScript vanilla.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)

---

## 📋 Descripción

**Beauty Makeup** es una aplicación web interactiva que simula una tienda en línea de productos de belleza y maquillaje. El proyecto está diseñado con fines educativos para demostrar el manejo del DOM, manipulación de eventos, y lógica de carrito de compras utilizando JavaScript puro.

La aplicación ofrece una experiencia de usuario completa, desde la exploración de servicios y productos, hasta la gestión dinámica de un carrito de compras con cálculo automático de totales.

---

## ✨ Características Principales

### 🎨 Secciones de la Página

- **🏠 Inicio**: Presentación de la marca con banner atractivo y descripción de la filosofía de belleza sostenible
- **💅 Servicios**: Catálogo visual de servicios ofrecidos:
  - Perfilado de cejas
  - Pestañas
  - Maquillaje profesional
  - Depilación
  - Botox facial
- **💡 Tips de Belleza**: Carrusel interactivo con consejos y recomendaciones para el cuidado del rostro
- **🛒 Carrito de Compras**: Sistema completo de e-commerce con:
  - Visualización de productos de maquillaje
  - Agregar productos al carrito
  - Gestión de cantidades automática
  - Eliminación individual de productos
  - Cálculo dinámico del precio total
  - Botón para vaciar el carrito
- **📞 Contacto**: Formulario de contacto y enlaces a redes sociales

### 🛍️ Funcionalidad del Carrito

- ✅ **Renderizado dinámico** de productos desde un array de datos en JavaScript
- ✅ **Gestión inteligente** de productos duplicados (incrementa cantidad en lugar de duplicar)
- ✅ **Actualización en tiempo real** del total de compra
- ✅ **Interfaz intuitiva** con botones de agregar y eliminar
- ✅ **Persistencia visual** durante la sesión
- ✅ **Código extensamente documentado** con comentarios educativos

### 🎯 Componentes Reutilizables

- Header y Footer dinámicos mediante `innerHTML`
- Uso de `DOMContentLoaded` para asegurar carga correcta del DOM
- Estructura modular con archivos separados para estilos y funcionalidad

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| **HTML5** | Estructura semántica de la página |
| **CSS3** | Estilos personalizados y diseño visual |
| **JavaScript (ES6+)** | Lógica de la aplicación y manipulación del DOM |
| **Bootstrap 5.3.1** | Framework CSS para diseño responsive |
| **Boxicons 2.1.4** | Biblioteca de iconos para UI y redes sociales |
| **Google Fonts** | Tipografías personalizadas (Daydream, Alike) |

---

## 📁 Estructura del Proyecto

```
Actividad_Semana_04_Bam_2.0/
│
├── index.html                 # Página principal
│
├── estilos/
│   ├── styles.css            # Estilos generales de la aplicación
│   └── carrito.css           # Estilos específicos del carrito
│
├── funcionalidad/
│   ├── index.js              # Manejo de header y footer dinámicos
│   ├── carrito.js            # Lógica completa del carrito de compras
│   └── carrito2.js           # Versión alternativa (archivo auxiliar)
│
├── img/                      # Imágenes de productos, servicios y banners
│   ├── banner.png
│   ├── labial.jpg
│   ├── delineador.jpg
│   ├── sombraOjos.webp
│   ├── rimel.png
│   ├── esmalte.png
│   ├── rubor.webp
│   └── ...
│
├── Kit_Tema_1/              # Assets de marca (logos y paleta de colores)
│   ├── 1-logo-negro.png
│   ├── 1-logo-blanco.png
│   ├── 1-logo-color.png
│   └── 1-paleta-fuentes.png
│
└── README.md                # Documentación del proyecto
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code, Sublime Text, etc.) - opcional

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Ludmimar/Actividad_Semana_04_Bam_2.0.git
   ```

2. **Navegar al directorio del proyecto**
   ```bash
   cd Actividad_Semana_04_Bam_2.0
   ```

3. **Abrir el archivo principal**
   - Abre `index.html` en tu navegador web preferido
   - También puedes usar Live Server en VS Code para una mejor experiencia de desarrollo

### Uso de la Aplicación

1. **Explorar servicios**: Navega por las diferentes secciones usando el menú del footer
2. **Ver tips de belleza**: Usa los controles del carrusel para ver diferentes consejos
3. **Agregar productos**: Haz clic en el botón "Agregar +" de cualquier producto
4. **Gestionar el carrito**: 
   - Observa cómo se actualiza automáticamente el total
   - Elimina productos individuales con el botón "X"
   - Vacía todo el carrito con el botón "Vaciar"
5. **Contacto**: Completa el formulario o accede a las redes sociales

---

## 💻 Funcionalidades Técnicas Destacadas

### Manipulación del DOM

```javascript
// Renderizado dinámico de productos
function renderizarProductos() {
  baseDeDatos.forEach((info) => {
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "col-sm-4");
    // ... más código
  });
}
```

### Gestión de Estado

```javascript
// Carrito como array dinámico
let carrito = [];

// Manejo de productos duplicados
const carritoSinDuplicados = [...new Set(carrito)];
```

### Eventos y Listeners

```javascript
// Event listener para agregar productos
miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);

// Event listener para vaciar carrito
DOMbotonVaciar.addEventListener("click", vaciarCarrito);
```

---

## 🎓 Conceptos de Programación Aplicados

Este proyecto implementa múltiples conceptos fundamentales de JavaScript:

- ✅ Manipulación del DOM
- ✅ Event Listeners y manejo de eventos
- ✅ Arrays y métodos: `forEach`, `filter`, `reduce`, `map`
- ✅ Operador Spread (`...`)
- ✅ Sets para eliminar duplicados
- ✅ Template literals
- ✅ Arrow functions
- ✅ Condicionales ternarios
- ✅ `querySelector` y `createElement`
- ✅ `classList` y manipulación de clases CSS
- ✅ `dataset` para atributos personalizados

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Dorado Principal | `#C28736` | Header, elementos destacados |
| Dorado Claro | `#f2c562` | Fondos de secciones |
| Marrón Oscuro | `#7e5d2e` | Botones, footer |
| Dorado Hover | `#f4b52b` | Estados hover |

---

## 📱 Características Responsive

- Diseño adaptable a diferentes tamaños de pantalla
- Uso de Bootstrap Grid System
- Navegación fija en la parte inferior (footer)
- Carrusel responsive para tips de belleza
- Imágenes fluidas con clase `img-fluid`

---

## 📄 Licencia

Este proyecto está destinado a **fines educativos y personales**. No tiene licencia comercial.

---

## 👩‍💻 Autora

**Martos Ludmila**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ludmimar89/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ludmimar)

---

## 🙏 Agradecimientos

- Bootstrap por el framework CSS
- Boxicons por la biblioteca de iconos
- Google Fonts por las tipografías
- GitHub por el hosting del repositorio

---

<div align="center">

**⭐ Si te gustó este proyecto, no olvides darle una estrella ⭐**

Hecho con 💄 y ☕ por Ludmila Martos

</div>
