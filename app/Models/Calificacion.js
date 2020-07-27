'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Calificacion extends Model { 
    registro(){
        return this.belongsTo('App/Models/Registro','idRegistro')
    }
}

module.exports = Calificacion
