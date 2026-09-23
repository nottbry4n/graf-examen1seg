# Instituto Tecnológico de Pachuca

## Ingeniería en Sistemas Computacionales

### Graficación

# EXAMEN 1er SEGUIMIENTO

---

### Datos del alumno

**Nombre:** Kevin Bryan Labra Lugo  
**Número de control:** 23200928  

---

## Objetivo

Desarrollar una interfaz web que permita modificar dinámicamente el tamaño de una imagen mediante cinco botones, utilizando HTML, CSS y JavaScript.

La interfaz permite que el usuario seleccione diferentes tamaños para la imagen de acuerdo con el botón seleccionado.

---

## Tecnologías utilizadas

- **HTML5** — Para crear la estructura de la página web.
- **CSS3** — Para diseñar la interfaz, los botones y los efectos visuales.
- **JavaScript** — Para implementar la funcionalidad de cambio de tamaño de la imagen.
- **Bootstrap 5** — Como apoyo para la estructura y diseño de la interfaz.

---

## Descripción de la interfaz

La aplicación cuenta con cinco botones de diferentes colores. Cada botón representa un tamaño específico para la imagen:

| Botón | Color | Tamaño |
|---|---|---:|
| **X - Pequeño** | Amarillo | 100 px |
| **Pequeño** | Azul | 180 px |
| **Mediano** | Gris | 300 px |
| **Grande** | Verde | 450 px |
| **X - Grande** | Rosa | 600 px |

Al seleccionar cualquiera de los botones, JavaScript modifica dinámicamente el ancho de la imagen. La altura se mantiene automática para conservar las proporciones originales y evitar que la imagen se deforme.

---

## Funcionamiento

El funcionamiento de la aplicación se divide principalmente en tres archivos:

### `index.html`

Contiene la estructura principal de la página, incluyendo:

- Título del examen.
- Contenedor de la imagen.
- Imagen utilizada en la actividad.
- Los cinco botones para modificar el tamaño.
- Información de los integrantes.

### `style.css`

Contiene los estilos visuales de la aplicación:

- Diseño general de la página.
- Estilos de la imagen.
- Colores de los cinco botones.
- Efectos `hover`.
- Transiciones al cambiar el tamaño.
- Diseño adaptable para diferentes tamaños de pantalla.

### `script.js`

Contiene la funcionalidad de los botones.

Cada botón tiene un evento `click` que modifica el ancho de la imagen de acuerdo con el tamaño seleccionado por el usuario.

---

## Estructura del proyecto

```text
📁 Proyecto
│
├── 📄 index.html
├── 📄 script.js
├── 📄 style.css
│
└── 📁 imagenes
    └── 🖼️ skull.svg
```

---

## Imagen utilizada

La imagen utilizada para realizar las pruebas de cambio de tamaño es:

```text
imagenes/skull.svg
```

Al estar dentro de la carpeta del proyecto, la aplicación puede cargarla mediante una ruta relativa desde el archivo `index.html`.

---

# Prompts utilizados en IA para apoyo a la funcionalidad

## Prompt 1 — Implementación de botones para cambiar el tamaño de la imagen

> En base a esos 3 archivos, ayúdame a modificar el código para obtener una interfaz que contenga 5 botones de diferentes colores: primer botón color amarillo "X - Pequeño", segundo botón color azul "Pequeño", tercer botón color gris "Mediano", cuarto botón color verde "Grande" y el último botón color rosa "X - Grande", además de que tengan la funcionalidad que cuando agregue la imagen se ajuste al tamaño que el usuario elija dependiendo del botón, es decir, si el usuario elige el botón amarillo, la imagen se hará muy pequeña, y así sucesivamente.

---

## Apoyo de la IA

La inteligencia artificial fue utilizada como apoyo para modificar y organizar el código de la interfaz, principalmente para implementar la funcionalidad de los cinco botones y el cambio dinámico del tamaño de la imagen.

El desarrollo se realizó utilizando los archivos HTML, CSS y JavaScript correspondientes al proyecto.

---

## Resultado esperado

Al ejecutar el archivo `index.html`, el usuario puede visualizar la imagen y seleccionar cualquiera de los cinco botones.

Dependiendo del botón seleccionado, la imagen cambia de tamaño:

- 🟨 **X - Pequeño** → 100 px.
- 🟦 **Pequeño** → 180 px.
- ⬜ **Mediano** → 300 px.
- 🟩 **Grande** → 450 px.
- 🩷 **X - Grande** → 600 px.

La transición del cambio de tamaño se realiza de manera visual mediante CSS y la modificación del tamaño se controla mediante JavaScript.

---
