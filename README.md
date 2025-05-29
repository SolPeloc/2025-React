# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## COMO CREAR PROYECTO

- npm create vite@latest en la terminal.
- poner el nombre de la carpeta del proyecto.
- Selecciona React como framework y configura el proyecto, con la flecha
- Te pide seleccionar una variante, en segundo plano y seleccionas javascript solo.
- Te da unos pasos a seguir:
* cd a la carpeta creada
* luego de posicionado en la carpeta creada, la sentencia npm install, para instalar las dependecias que maneja react.
* Ejecuta: npm run dev para ver tu aplicación en local.


## Dependencias:
-REACT ROUTER DOM (npm i react-router-dom)
se puede poner en el main y que envuelva el componente principal, app.jsx
o
directamente en el componente app.jsx
para que sea escalable, mejor poner en el main:
importamos el routes y lo envolvemos en app.



