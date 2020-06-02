const fs = require('fs');

let crearArchivo = (tabla) => {
    let data = '';
    return new Promise((resolve, reject) => {
        for (let i = 0; i <= 10; i++) {
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
    crearArchivo
}