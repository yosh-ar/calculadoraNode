const { crearArchivo } = require('./multiplicar/multiplicar');

// console.log(crearArchivo);

crearArchivo(1).then(archivo => {
    console.log(archivo);
}).catch(err => {
    console.log(err);
});