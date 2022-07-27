const fs = require('fs');

const crearArchivo = async(base,listar,hasta) =>{
    let nomArchivo = `tabla-${base}.txt`;
    try {
        let salida ='';

        salida +=`==========================\n`
        salida +=`    TABLA DEL NUMERO:  ${base} \n`
        salida +=`==========================\n`

        for(let i=1; i<=hasta; i++){
            salida += `${base} X ${i} = ${base*i}\n`;    
        }

        if(listar==true){
            console.log(salida);
        }

        fs.writeFileSync('./salida/'+ nomArchivo,salida);
    } catch (error) {
        throw error;
    }
    return nomArchivo;
// 
}

module.exports={
    crearArchivo
}