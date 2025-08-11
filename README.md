# API Gestión Veterinaria

## Descripción

Esta es una API REST para gestionar clientes y sus mascotas en una clínica veterinaria. Permite realizar operaciones CRUD sobre clientes y mascotas, además de contar con un endpoint especial para filtrar mascotas por cliente.

---

## Características principales

- CRUD completo para **Clientes**:
  - Crear, obtener, actualizar y eliminar clientes.
- Gestión de **Mascotas**:
  - Crear mascotas vinculadas a clientes existentes.
  - Filtrar mascotas por cliente a través de un parámetro de consulta (`cliente_id`).
- Validaciones y manejo de errores con Mongoose.
- Uso de MongoDB Atlas para persistencia.
- Rutas organizadas de forma modular.
- Endpoint de negocio: `/api/mascotas?cliente_id=...` para obtener mascotas de un cliente específico.

---

## Tecnologías utilizadas

- **Backend:** Node.js, Express.js
- **Base de datos:** MongoDB con Mongoose
- **Extras:** dotenv para variables de entorno

---

## Instalación y uso

### 1. Clonar repositorio

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio
### 2. Instalar dependencias
bash
Copiar
Editar
npm install
### 3. Configurar variables de entorno
Crea un archivo .env en la raíz con el siguiente contenido:

env
Copiar
Editar
MONGO_URI=tu_cadena_de_conexion_mongodb_atlas
PORT=3000
Cambia tu_cadena_de_conexion_mongodb_atlas por la URI real que obtuviste en MongoDB Atlas.

### 4. Ejecutar el servidor
bash
Copiar
Editar
npm run dev
El servidor arrancará en el puerto definido (por defecto 3000).

Estructura del proyecto
bash
Copiar
Editar
/mi-veterinaria
├── app.js
├── /models
│   ├── Cliente.js
│   └── Mascota.js
├── /routes
│   ├── clientes.js
│   └── mascotas.js
├── /config
│   └── db.js
├── .env
├── package.json
└── README.md
API Endpoints
Método	Ruta	Descripción
GET	/api/clientes	Listar todos los clientes
GET	/api/clientes/:id	Obtener un cliente por ID
POST	/api/clientes	Crear un nuevo cliente
PUT	/api/clientes/:id	Actualizar un cliente
DELETE	/api/clientes/:id	Eliminar un cliente
GET	/api/mascotas	Listar todas las mascotas o filtrar por cliente (?cliente_id=ID)
POST	/api/mascotas	Crear una mascota vinculada a un cliente

Próximos pasos (ideas de mejora)
Agregar autenticación y autorización.

Implementar paginación en los endpoints de listado.

Añadir validaciones más robustas (por ejemplo, formato de email y teléfono).

Crear documentación con Swagger o Postman.

