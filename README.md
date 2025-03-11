# Proyecto CRUD Avanzado con React, Redux y Validaciones

## 📌 Descripción
Este proyecto es una aplicación web desarrollada con React y Redux que permite la gestión de usuarios mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Sin embargo, va más allá de un CRUD básico al incluir:
- **Validaciones avanzadas con Yup y React Hook Form**
- **Gestión de estado con Redux Toolkit**
- **Diseño modular con CSS puro**
- **Componentización limpia y reutilizable**

## 🚀 Tecnologías Utilizadas
- **React** con TypeScript
- **Redux Toolkit** para la gestión del estado global
- **React Hook Form** para la gestión de formularios
- **Yup** para validaciones de datos
- **CSS Modules** para estilos encapsulados

## 📂 Estructura del Proyecto
```
📦 proyecto-crud
├── 📂 components
│   ├── 📜 Form.tsx       # Componente de formulario con validaciones
│   ├── 📜 Table.tsx      # Componente para listar usuarios
│   ├── 📜 Modal.tsx      # Componente de modal reutilizable
├── 📂 pages
│   ├── 📜 CrudPage.tsx   # Página principal del CRUD
├── 📂 store
│   ├── 📜 userSlice.ts   # Estado y acciones de usuarios en Redux
├── 📂 services
│   ├── 📜 userService.ts # Simulación de API para obtener usuarios
├── 📂 types
│   ├── 📜 index.ts       # Tipos de TypeScript usados en el proyecto
├── 📂 styles
│   ├── 📜 Form.module.css  # Estilos del formulario
│   ├── 📜 Table.module.css # Estilos de la tabla
│   ├── 📜 Modal.module.css # Estilos del modal
├── 📜 README.md         # Documentación del proyecto
├── 📜 package.json      # Dependencias y configuración
```

## 🛠 Instalación y Uso
1. Clona el repositorio:
   ```bash
   git clone https://github.com/lizethPatino/proyecto-crud.git
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd proyecto-crud
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en el navegador: `http://localhost:3000`

## 📌 Características
✅ **Añadir usuarios con validaciones en tiempo real**
✅ **Edición de usuarios con datos precargados**
✅ **Eliminación de usuarios con actualización instantánea**
✅ **Modal reutilizable para formularios**
✅ **Diseño responsive y accesible**

## 📌 Mejoras Futuras
🚀 **Test unitarios**
🚀 **Integración con una API real**
🚀 **Autenticación de usuarios**
🚀 **Paginación y búsqueda avanzada**

## 📄 Licencia
Este proyecto está bajo la licencia MIT.
