# 📖 NicoLibri - Modern BookStore App

Una experiencia premium de librería digital construida con **Angular 21**. Este proyecto no es solo una tienda, sino una implementación de referencia de prácticas modernas de Angular, centrada en el rendimiento, la reactividad y una UI/UX refinada.

[![Angular](https://img.shields.io/badge/Angular-21-dd0031.svg?logo=angular)](https://angular.io/)
[![Signals](https://img.shields.io/badge/State-Signals-blue.svg)](https://angular.io/guide/signals)
[![Styles](https://img.shields.io/badge/Styles-Bootstrap_5_|_Glassmorphism-7952b3.svg?logo=bootstrap)](https://getbootstrap.com/)

---

## ✨ Características Destacadas

### 🎨 UI/UX Moderna
- **Diseño Glassmorphism**: Navbar con efectos de desenfoque y transparencia para una estética moderna.
- **Micro-interacciones**: Transiciones suaves, estados de hover refinados y feedback visual inmediato.
- **Avatar Dinámico**: Sistema de perfiles que genera avatares basados en la inicial del usuario.

### ⚡ Arquitectura de Estado (Signals)
- **Reactividad Granular**: Uso exclusivo de **Angular Signals** para la gestión del carrito y la sesión de usuario, evitando ciclos de detección de cambios innecesarios.
- **Persistence Layer**: Sincronización automática entre el estado de la aplicación y `localStorage` mediante `effect()`.

### 🔐 Seguridad y Auth
- **Flujo de Autenticación**: Sistema completo de Registro y Login con validaciones en tiempo real.
- **Rutas Protegidas**: Estructura preparada para guards de navegación.

---

## 🛠️ Stack Tecnológico

| Herramienta | Uso |
| :--- | :--- |
| **Angular 21** | Framework con componentes Standalone. |
| **Signals** | Gestión de estado reactivo global. |
| **Bootstrap 5** | Maquetación responsiva y componentes base. |
| **SweetAlert2** | Notificaciones y alertas elegantes. |
| **Bootstrap Icons** | Librería de iconografía consistente. |

---

## 📂 Estructura del Proyecto

```text
src/app/
├── auth/               # Módulos de Login y Registro
├── components/         # Componentes de UI reutilizables (Cards, Layouts)
├── core/               # Modelos, interfaces y constantes
├── pages/              # Vistas principales de la aplicación
├── services/           # Lógica de negocio (Auth, Cart, Books)
├── shared/             # Componentes globales (Navbar, Footer)
└── app.routes.ts       # Configuración de rutas lazy-loading
```

---

## 🚀 Instalación y Desarrollo

1. **Clonar y Acceder:**
   ```bash
   git clone https://github.com/tu-usuario/book-store.git
   cd book-store
   ```

2. **Instalar Dependencias:**
   ```bash
   npm install
   ```

3. **Lanzar Servidor:**
   ```bash
   npm start
   ```
   Accede a `http://localhost:4200/`.

---

## 🗺️ Roadmap de Próximas Mejoras

- [ ] **Backend Integration**: Migrar de `localStorage` a una API REST (Firebase o Node.js).
- [ ] **Dark Mode**: Implementación de tema oscuro mediante variables CSS.
- [ ] **Payment Gateway**: Simulación de pasarela de pago con Stripe.
- [ ] **Unit Testing**: Cobertura de tests para servicios críticos de Signals.

---

Desarrollado con ❤️ por [Tu Nombre] - 2026
