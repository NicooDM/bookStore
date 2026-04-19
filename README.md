# 📖 BookStore App

Una aplicación de librería moderna y funcional construida con **Angular 21**. Este proyecto simula una tienda en línea completa, permitiendo a los usuarios explorar libros, gestionar un carrito de compras y administrar su cuenta mediante un sistema de autenticación local.

## 🚀 Tecnologías y Herramientas

- **Angular 21**: Framework principal utilizando componentes Standalone.
- **Gestión de Estado**: Uso de **Angular Signals** para un manejo reactivo y eficiente de la información (Auth, Carrito).
- **Estilos**: **Bootstrap 5** y **Bootstrap Icons** para una interfaz limpia y responsiva.
- **Validaciones**: Formularios Reactivos con validaciones personalizadas.
- **Persistencia**: Uso de `localStorage` para simular una base de datos de usuarios y mantener la sesión activa.
- **Alertas**: **SweetAlert2** para una experiencia de usuario mejorada en notificaciones.

## ✨ Características Principales

- **Autenticación Completa**: Registro de usuarios y Login funcional con persistencia de datos.
- **Catálogo de Libros**: Lista dinámica de libros con búsqueda filtrada por título.
- **Detalles de Producto**: Vista detallada de cada libro antes de añadirlo al carrito.
- **Carrito de Compras**: Sistema para agregar, eliminar y calcular totales en tiempo real mediante Signals.
- **Layout Responsivo**: Diseño adaptado para escritorio y dispositivos móviles.
- **Navegación Segura**: Rutas organizadas y estructuradas de forma modular.

## 🛠️ Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/book-store.git
   cd book-store
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```
   Abre [http://localhost:4200/](http://localhost:4200/) en tu navegador.

## 📂 Estructura del Código

El proyecto sigue una estructura limpia y modular:

- `src/app/services/`: Lógica central de autenticación, carrito y gestión de libros.
- `src/app/pages/`: Vistas principales (Home, Login, Register, Checkout, Details).
- `src/app/components/`: Piezas de UI reutilizables (CardBook, ListBook, StoreLayout).
- `src/app/shared/`: Componentes globales como el Navbar y Footer.
- `src/app/core/models/`: Definición de interfaces de datos (Book, User).

## 🌐 Despliegue

Este proyecto está listo para ser desplegado en **Vercel**. Puedes ver la configuración en el archivo `vercel.json` incluido en el repositorio.

---
