const fs = require('fs');


let ListarTabla = (tabla, limite) => {
    let t = '';
    return new Promise((resolve, reject) => {

        if (!Number(tabla)) {
            reject(`la tabla ${tabla} no es un numero valido`);
            return;
        }
        if (!Number(limite)) {
            reject(`el limite ${limite} no es un numero valido`);
            return;
        }
        for (let i = 0; i <= limite; i++) {
            t += (`Tabla del ${tabla} * ${i} = ${tabla*i}\n`);
        }
        resolve(t);
    });
}
ListarTabla(5, 20);

let crearArchivo = (tabla, limite = 10) => {
    let data = '';
    return new Promise((resolve, reject) => {
        if (!Number(tabla)) {
            reject(`el valor ${tabla} ingresado no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`el limite ${limite} no es un numero valido`);
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data += `${tabla} * ${i} = ${i*tabla}\n`;
        }
        // console.log(data);
        fs.writeFile(`./tablas/tabla-${tabla}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${tabla}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    ListarTabla
}