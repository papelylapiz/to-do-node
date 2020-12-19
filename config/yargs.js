const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado compleatado a una tareas', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea de la lista de tareas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}