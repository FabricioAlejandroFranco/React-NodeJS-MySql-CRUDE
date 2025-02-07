Proyecto React Node MySQL

Este proyecto es una aplicación web basada en React para el frontend, Node.js y Express para el backend, y MySQL como base de datos. La aplicación permite a los usuarios agregar, actualizar, eliminar y ver libros.

📌 Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

Node.js

MySQL

Git

🚀 Instalación

1️⃣ Clonar el Repositorio

git clone https://github.com/FabricioAlejandroFranco/nombre-del-repositorio.git
cd nombre-del-repositorio

2️⃣ Configurar el Servidor MySQL

Inicia sesión en tu servidor MySQL y crea una base de datos llamada test:

CREATE DATABASE test;

Luego, crea la tabla books:

USE test;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  `desc` TEXT,
  cover VARCHAR(255),
  price DECIMAL(10, 2)
);

3️⃣ Configurar el Backend

Navega al directorio del servidor e instala las dependencias:

cd server
npm install

Inicia el servidor:

npm start

4️⃣ Configurar el Frontend

Navega al directorio del cliente e instala las dependencias:

cd client
npm install

Inicia la aplicación React:

npm start

🖥️ Uso

➕ Agregar un Libro

Navega a /add en tu navegador.

Completa el formulario.

Haz clic en "Add".

🔄 Actualizar un Libro

Navega a / en tu navegador.

Haz clic en "Update" junto al libro que deseas actualizar.

Completa el formulario y haz clic en "Update".

🗑️ Eliminar un Libro

Navega a / en tu navegador.

Haz clic en "Delete" junto al libro que deseas eliminar.

📂 Estructura del Proyecto

nombre-del-repositorio/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Add.jsx
│   │   │   ├── Books.jsx
│   │   │   ├── Update.jsx
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── server/
│   ├── index.js
│   ├── package.json
├── README.md

🤝 Contribuir

Haz un fork del proyecto.

Crea una nueva rama:

git checkout -b feature/nueva-funcionalidad

Realiza tus cambios y haz commit:

git commit -am "Agregar nueva funcionalidad"

Sube tus cambios:

git push origin feature/nueva-funcionalidad

Abre un Pull Request.

📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
