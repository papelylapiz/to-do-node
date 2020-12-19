const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Comando para crear tarea');
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        console.log('Comando para listar todas las tareas por hacer');
        let listado = porHacer.getListar();
        for (let task of listado) {
            console.log('============Por Hacer ==========='.green);
            console.log(task.descripcion);
            console.log('Estado: ', task.completado);
            console.log('================================='.green);
        }
        break;
    case 'actualizar':
        console.log('Comando para actualizar tarea');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Comando para eliminar una tarea de la lista de tareas');
        let result = porHacer.borrar(argv.descripcion);
        console.log(result);
        break;
    default:
        console.log('Comando no reconocido');

}