# 📚 bookStore - NicoLibri E-commerce

Bienvenido a **bookStore**, una plataforma de venta de libros digitales moderna y minimalista. Este proyecto nació bajo la marca **NicoLibri** para ofrecer una experiencia de usuario premium, rápida y totalmente reactiva, utilizando las últimas innovaciones de **Angular**.

---

## 🚀 Demo en Vivo
Puedes explorar la tienda aquí: [Link de tu proyecto en Vercel]

## ✨ Características Destacadas

* **Arquitectura Moderna:** Basada al 100% en **Standalone Components**.
* **Gestión de Estado Pro:** Implementación de **Angular Signals** para una reactividad ultra eficiente.
* **Consumo de API:** Integración completa con **Google Books API** para catálogo y búsquedas.
* **Persistencia Local:** Carrito de compras sincronizado con el `localStorage` (¡no pierdes tus libros al recargar!).
* **Diseño Responsive:** Interfaz elegante construida con **Bootstrap 5**, optimizada para móviles y escritorio.
* **Rutas Optimizadas:** Uso de **Lazy Loading** para mejorar el tiempo de carga inicial.

## 🛠️ Tecnologías

* **Angular 18+** (Core)
* **TypeScript** (Lógica)
* **Bootstrap 5** (Estilos)
* **Lucide Icons / Bootstrap Icons** (Iconografía)
* **Vercel** (Hosting y Despliegue)

---

## 📦 Estructura del Repositorio

```text
src/app/
├── core/         # Servicios (BookService, CartService), Models y Guards.
├── components/   # Componentes compartidos (Navbar, Footer, BookCard).
├── pages/        # Vistas principales (Home, Search, Details, Cart).
└── environments/ # Configuración de API de Google Books.