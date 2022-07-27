
const argv = require('yargs')
.options('b',{
    alias: 'base',
    type: 'number',
    demandOption:true,
    describe : 'Es la base de la tabla de multiplicar'
})
.option('l',{
    alias : 'listar',
    type : 'boolean',
    default : false,
    demandOption:true,
    boolean : true,
    describe : 'Sirve para Listar'
})
.option('h',{
    alias : 'hasta',
    type : 'number',
    default : 12,
    demandOption:true,
    describe : 'Sirve para Determinar Hasta que numero se multiplicara'
})
.check( (argv,options) => {
    if( isNaN( argv.b) ){
        throw 'la base tiene que ser un numero'
    }
    return true;
})
.argv;


module.exports = argv;