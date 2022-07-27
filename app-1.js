const base =2;

const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

crearArchivo(base)
    .then(nomArchivo => console.log(`Archivo ${nomArchivo} creado con exito`))
    .catch(err => console.log(err)) ;