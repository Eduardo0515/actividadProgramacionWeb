'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Registro extends Model {
    alumno(){
        return this.belongsTo('App/Models/Alumno','idAlumno')
    }
    materia(){
        return this.belongsTo('App/Models/Materia','idMateria')
    }
}

module.exports = Registro
