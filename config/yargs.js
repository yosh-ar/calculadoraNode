let yargs = require('yargs');

let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

let argv = yargs.command('listar', 'Lista la tabla de multiplicar ingresada', opts)
    .command('crear', 'crea la tabla de multiplicar ingresada', opts)
    .help()
    .argv;

module.exports = {
    argv
}