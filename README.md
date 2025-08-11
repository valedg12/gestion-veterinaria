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
```bash
cd gestion-veterinaria
npm install
```
Instala las dependencias necesarias:
```bash
npm install
```

### 3. Configurar la base de datos
```bash
MONGO_URI=tu_cadena_de_conexion_mongodb_atlas
PORT=3000
```

### 4. Ejecutar el servidor
```bash
npm run dev
```
El servidor estará disponible en `http://localhost:3000`.

---

## **Estructura del Proyecto**
```plaintext
gestion-veterinaria/
├── config/         # Configuración de la base de datos
│   ├── db.js
├── models/         # Modelos de MongoDB
│   ├── mascotaModel.js
├── routes/         # Rutas de la API
│   ├── mascotas.js
├── app.js        # Punto de entrada de la aplicación
├── package.json    # Dependencias y scripts
```

---

## **Endpoints Principales**

| Método | Endpoint                       | Descripción                            |
|--------|--------------------------------|----------------------------------------|
| GET    | `/api/clientes`                | lista de todos los clientes            |
| GET    | `/api/clientes/:id`            | Obtiene un cliente por ID              |
| POST   | `/api/clientes`                | Crea un nuevo cliente                  |
| PUT    | `/api/clientes/:id`            | Actualiza un cliente por ID            |
| DELETE | `/api/cliente/:id`             | Elimina un cliente por ID              |
| GET    | `/api/mascotas/`               | lista de las mascotas                  |
| POST   | `/api/mascotas`                | Crea una nueva mascota                 |

---

## **Ejemplo**

### Crear una mascota 
**Petición:** POST `/mascota`
```json
{
  "nombre": "Firulais",
  "especie": "Perro",
  "raza": "Labrador",
  "edad": 5,
  "cliente_id": "64e8fbd27e6e91c4a93b52a1"
}
```


---

## **Próximos Pasos**
- Integrar autenticación de usuarios para gestionar permisos.
- disponible en VERCEL gestion-veterinaria-lakgmaiiw-valentinas-projects-4308053b.vercel.app

---

