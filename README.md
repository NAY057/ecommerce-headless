# Ecommerce Headless (Gaming Store)

Proyecto de e-commerce headless para venta de videojuegos, construido con **Next.js + React** en el frontend y preparado para integrarse con un CMS/API (Strapi), pagos con Stripe y despliegue en infraestructura cloud.

---

## 🚀 ¿Para qué sirve este proyecto?

Este proyecto sirve para:

- Mostrar catálogo de videojuegos por plataforma.
- Ver detalle de cada juego (precio, descuento, media, información).
- Gestionar autenticación de usuarios y cuenta.
- Manejar carrito de compras y flujo de checkout.
- Integrar pago seguro con Stripe.
- Consumir contenido desde una API headless (por ejemplo Strapi).

---

## 🧱 Tecnologías usadas y para qué se usan

### 1) Next.js
**¿Para qué sirve?**
- Framework de React para construir aplicaciones web con routing, renderizado eficiente y optimización de build.

**¿Cómo se usa en este proyecto?**
- Manejo de páginas en `src/pages` (home, search, cart, account, etc.).
- Construcción y despliegue optimizado con `next build`.

---

### 2) React
**¿Para qué sirve?**
- Librería para crear interfaces de usuario basadas en componentes reutilizables.

**¿Cómo se usa en este proyecto?**
- Componentes para layout, catálogo, carrito, cuenta y checkout (`src/components`).

---

### 3) Hooks (React Hooks + hooks custom)
**¿Para qué sirven?**
- Permiten manejar estado y lógica reutilizable en componentes funcionales.

**¿Cómo se usan en este proyecto?**
- Hooks propios como `useAuth` y `useCart` para centralizar sesión y carrito.

---

### 4) Strapi
**¿Para qué sirve?**
- CMS/API headless para modelar contenido (juegos, plataformas, usuarios, direcciones, pedidos) y exponer endpoints.

**¿Cómo se usa en este proyecto?**
- El frontend consume datos mediante capa de APIs en `src/api` (Game, Platform, User, Address, Wishlist, Order).
- La configuración de endpoints vive en utilidades y constantes de entorno.

---

### 5) Stripe
**¿Para qué sirve?**
- Plataforma de pagos online para procesar cobros de forma segura.

**¿Cómo se usa en este proyecto?**
- Integración en el checkout con `@stripe/stripe-js` y `@stripe/react-stripe-js`.
- Inicialización de Stripe y renderizado del formulario de pago en el paso de checkout.

---

### 6) AWS
**¿Para qué sirve?**
- Infraestructura cloud para desplegar frontend/backend, almacenar media y escalar la aplicación.

**¿Cómo se usa en este proyecto?**
- Puede utilizarse para hosting de frontend, backend Strapi y almacenamiento de assets/imágenes (por ejemplo S3 + CloudFront).
- El proyecto está preparado para ejecutarse en entornos cloud con variables de entorno.

---

### 7) SASS (SCSS Modules)
**¿Para qué sirve?**
- Preprocesador CSS para mantener estilos más organizados, escalables y reutilizables.

**¿Cómo se usa en este proyecto?**
- Estilos por componente con `*.module.scss`.
- Variables globales y estilos base en `src/scss`.

---

### 8) Formik
**¿Para qué sirve?**
- Manejo de formularios en React (estado, submit, errores y campos).

**¿Cómo se usa en este proyecto?**
- Formularios de autenticación y ajustes de cuenta (cambio de nombre, email, password, direcciones).

---

### 9) Yup
**¿Para qué sirve?**
- Validación declarativa de esquemas para formularios.

**¿Cómo se usa en este proyecto?**
- Reglas de validación en formularios gestionados con Formik.
- Mensajes de error y validaciones antes de enviar al backend.

---

## 🧪 Ejemplo práctico dentro del proyecto (tecnologías combinadas)

### Caso: Checkout de compra de un videojuego

1. El usuario navega por páginas de catálogo (**Next.js** + **React**).
2. Agrega un juego al carrito usando estado global y lógica reusable (**Hooks**).
3. Completa datos en formularios (dirección/pago) con **Formik**.
4. Se validan campos con **Yup**.
5. Se obtiene y envía información de productos/usuario vía API headless (**Strapi**).
6. Se procesa el pago con **Stripe** en el paso de pago.
7. La UI mantiene estilos modulares y responsivos con **SASS**.
8. En producción, frontend/backend/assets se pueden desplegar en **AWS**.

---

## ⚙️ Scripts

```bash
npm run dev     # entorno local
npm run build   # build de producción
npm run start   # levantar build en modo producción
npm run lint    # lint (si está configurado)
```

---

## 📁 Estructura general

- `src/pages`: rutas y páginas Next.js.
- `src/components`: componentes UI y secciones de negocio.
- `src/layouts`: layouts principales.
- `src/hooks`: hooks custom.
- `src/api`: capa de consumo API.
- `src/scss`: estilos globales, variables y overrides.

