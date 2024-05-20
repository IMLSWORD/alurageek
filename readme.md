# Alurageek

### LINKS:

<a href="https://alurageek-gilt.vercel.app/" style="color: yellow; font-size: 20px;">Vercel</a>

<a href="https://www.linkedin.com/in/diego-armando-zu%C3%B1iga/" style="color: red; font-size: 18px;">Linkedin</a>





## Descripción

Alurageek es una aplicación web que permite a los usuarios visualizar una lista de productos relacionados con League of Legends, agregar nuevos productos y eliminar productos existentes. La aplicación está construida utilizando HTML, CSS y JavaScript, y se comunica con una API para realizar las operaciones de CRUD (Crear, Leer, Actualizar y Eliminar) en los productos.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos y carpetas:

- `index.html`: El archivo principal de la aplicación que contiene la estructura HTML.
- `style.css`: Archivo CSS para estilos personalizados.
- `reset.css`: Archivo CSS para reiniciar los estilos predeterminados del navegador.
- `js/controllers/main.js`: Archivo JavaScript que contiene la lógica principal de la aplicación.
- `js/services/services.js`: Archivo JavaScript que contiene las funciones para interactuar con la API.
- `imagenes/`: Carpeta que contiene imágenes y videos utilizados en la aplicación.

## Instrucciones de Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona el repositorio a tu máquina local:

    ```bash
    git clone https://github.com/IMLSWORD/Alurageek.git
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd Alurageek
    ```

3. Abre el archivo `index.html` en tu navegador preferido para ver la aplicación en funcionamiento.

## Descripción del Código

### HTML (`index.html`)

El archivo `index.html` define la estructura de la página, incluyendo el encabezado, el cuerpo y el pie de página. Contiene:

- Un encabezado con un título y un video introductorio.
- Una sección principal que muestra una lista de productos y un formulario para agregar nuevos productos.
- Un pie de página con información sobre el creador del sitio.

### CSS (`style.css` y `reset.css`)

Los archivos CSS definen los estilos para la página:

- `reset.css`: Restablece los estilos predeterminados del navegador para asegurar consistencia en diferentes navegadores.
- `style.css`: Contiene los estilos personalizados para la aplicación, incluyendo diseño de la cabecera, la introducción, la lista de productos, el formulario y el pie de página.

### JavaScript (`js/services/services.js` y `js/controllers/main.js`)

#### `services.js`

Este archivo contiene funciones asincrónicas para interactuar con la API:

- `listaProductos`: Obtiene la lista de productos desde la API.
- `creaProductos`: Crea un nuevo producto en la API.
- `eliminaProductos`: Elimina un producto de la API.

#### `main.js`

Este archivo contiene la lógica principal de la aplicación:

- Cargar y mostrar la lista de productos al cargar la página.
- Manejar el envío del formulario para agregar un nuevo producto.
- Manejar la eliminación de productos existentes.

## Funcionalidades

1. **Lista de Productos**: La aplicación muestra una lista de productos obtenidos de la API al cargar la página.
2. **Agregar Producto**: Los usuarios pueden agregar nuevos productos mediante el formulario. El formulario solicita el nombre, el precio y la imagen del producto.
3. **Eliminar Producto**: Los usuarios pueden eliminar productos existentes de la lista.

## Uso

### Visualizar Productos

Al cargar la página, la lista de productos se obtiene de la API y se muestra en la sección de productos.

### Agregar Producto

1. Completa el formulario con el nombre, precio e imagen del producto.
2. Haz clic en "Publicar" para agregar el producto.

### Eliminar Producto

1. Haz clic en el botón de eliminar junto al producto que deseas eliminar.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agregar nueva funcionalidad'`).
4. Empuja tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Cambios

[![CI](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)](https://github.com/user/repo/actions/workflows/ci.yml)


## Autor
[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=IMLSWORD&show_icons=true&theme=radical)](https://github.com/IMLSWORD)

**Diego Armando** - [GitHub](https://github.com/IMLSWORD)

---

¡Gracias por usar Alurageek!
