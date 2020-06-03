let arg = require('./config/yargs').argv;
const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');


let b = arg.base;
let l = arg.limite;
// console.log(arg);

let comando = arg._[0];
// // console.log(comando);

switch (comando) {
    case 'listar':
        ListarTabla(b, l).then(tabla => {
            console.log(tabla);
        }).catch(err => {
            console.log(err);
        });
        break;
    case 'crear':
        crearArchivo(b, l).then(archivo => {
            console.log(archivo);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('la opción ingresada no es valida');
}


// console.log(crearArchivo);
// let tabla = 'hola';