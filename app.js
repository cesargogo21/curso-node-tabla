const base =2;
const fs = require('fs');

console.clear();

console.log('==========================')
console.log('    TABLA NUMERO ',base)
console.log('==========================')

let salida ='';
for(let i=1; i<=12; i++){
    salida += `${base} X ${i} = ${base*i}\n`;
    
}
fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
    if(err) throw err;
    console.log(`Tabla del ${base} creada con exito`);

}) ;
