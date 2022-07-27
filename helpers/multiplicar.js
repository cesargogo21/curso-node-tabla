const fs = require('fs');

const crearArchivo = async(base) =>{
    let nomArchivo = `tabla-${base}.txt`;
    try {
        let salida ='';

        salida +=`==========================\n`
        salida +=`    TABLA DEL NUMERO:  ${base} \n`
        salida +=`==========================\n`

        for(let i=1; i<=12; i++){
            salida += `${base} X ${i} = ${base*i}\n`;    
        }

        fs.writeFileSync(nomArchivo,salida);
    } catch (error) {
        throw error;
    }
    return nomArchivo;
// 
}

module.exports={
    crearArchivo
}