const express = require('express');
const app = express();
const dbconnect = require('./config/db');
const clientesRoutes = require('./routes/clientes');
const mascotasRoutes = require('./routes/mascotas');

require('dotenv').config();

// Middlewares
const loggingMiddleware = require('./middlewares/loggingMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware'); 
const notFoundMiddleware = require('./middlewares/notFoundMiddleware'); 

// CORS
const cors = require('cors');
app.use(cors()); // Permite todos los orígenes

// Middleware personalizado
app.use(loggingMiddleware);

// Parseo de JSON
app.use(express.json());

// Rutas
app.use('/api', clientesRoutes);
app.use('/api', mascotasRoutes);

// Rutas por defecto
app.get('/', (req, res) => {
  res.send('API Veterinaria funcionando');
});

// Middlewares de error
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// Puerto
const PORT = process.env.PORT || 3000;

// Conexión a base de datos y arranque del servidor
dbconnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.log('No se pudo iniciar el servidor debido a un error en la base de datos');
  });

module.exports = app;  