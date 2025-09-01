# 🛒 Proyecto Final - Galván Ignacio

**TechStore** es una aplicación web de tipo e-commerce desarrollada como proyecto final del curso de React. La app permite navegar entre productos, ver sus detalles, agregar productos al carrito y finalizar la compra. Utiliza tecnologías modernas como React, React Router, Firebase y Context API.

## 🚀 Funcionalidades principales

- ✅ Catálogo de productos dinámico
- ✅ Detalle individual de cada producto
- ✅ Filtro por categoría
- ✅ Carrito de compras con almacenamiento global mediante Context
- ✅ Componente de selección de cantidad (`ItemCount`) con control de stock
- ✅ Checkout con formulario y validación de datos
- ✅ Envío de orden de compra a Firestore
- ✅ Visualización del ID de orden confirmada
- ✅ Renderizado condicional (carrito vacío, stock, errores)
- ✅ Navegación SPA (sin recargas)

## 🧱 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- [Firebase (Firestore)](https://firebase.google.com/)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Vite](https://vitejs.dev/)

## 🛠 Estructura de componentes
App
├── NavBar
│ └── CartWidget
├── ItemListContainer
│ └── ItemList
│ └── Item
├── ItemDetailContainer
│ └── ItemDetail
│ └── ItemCount
├── Cart
│ └── CartItem
└── CheckoutForm

## 🔥 Firebase

Se utiliza Firebase como backend para:

- Obtener productos desde Firestore
- Crear órdenes de compra al confirmar una compra

Configuración ubicada en:
src/firebase/firebaseConfig.ts


