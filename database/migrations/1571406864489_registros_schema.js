'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistrosSchema extends Schema {
  up () {
    this.create('registros', (table) => {
      table.increments()
      table.integer('idMateria').unsigned().references('id').inTable('materias')
      table.integer('idAlumno').unsigned().references('id').inTable('alumnos')
      table.timestamps()
    })
  }

  down () {
    this.drop('registros')
  }
}

module.exports = RegistrosSchema
