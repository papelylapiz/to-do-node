const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const cargarBD = () => {
    try {
        listadoToDo = require('../db/data.json');
    } catch (e) {
        listadoToDo = [];
    }
}

const crear = descripcion => {
    cargarBD();
    let nuevaTarea = {
        descripcion,
        completado: false
    }
    listadoToDo.push(nuevaTarea);
    guardarDB();
    return nuevaTarea;
}

const getListar = () => {
    cargarBD();
    return listadoToDo;
}

const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = descripcion => {
    cargarBD();
    let nuevoListado = listadoToDo.filter(tarea => tarea.descripcion !== descripcion);
    if (nuevoListado.length === listadoToDo.length) {
        return false;
    } else {
        listadoToDo = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    getListar,
    actualizar,
    borrar
}