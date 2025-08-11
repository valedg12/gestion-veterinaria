const errorMiddleware = (err, req, res, next) => {
    
    console.error(err.stack);

    const statusCode = err.status || 500; 
    
    res.status(statusCode).send({
        mensaje: err.message || 'Error interno del servidor',
        error: statusCode === 500 ? 'Error interno' : err.message,
        
    });
    

};

module.exports = errorMiddleware;