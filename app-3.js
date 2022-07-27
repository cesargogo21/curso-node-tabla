const {crearArchivo} = require('./helpers/multiplicar-2');
const argv= require('./config/yargs');

console.clear();

// console.log('base: ' , argv.b);
// console.log('listar: ' , argv.l);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nomArchivo => console.log(`Archivo ${nomArchivo} creado con exito`))
    .catch(err => console.log(err)) ;