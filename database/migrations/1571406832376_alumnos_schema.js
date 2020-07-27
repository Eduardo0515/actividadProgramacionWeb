'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnosSchema extends Schema {
  up () {
    this.create('alumnos', (table) => {
      table.increments()
      table.integer('matricula').unique();
      table.string('nombre',50).notNullable();
      table.string('apellido',50).notNullable();
      table.string('carrera',50).notNullable();
      table.date('fecha_Nacimiento');
      table.string('domicilio',50).notNullable();
      table.string('email',50).notNullable().unique();
      table.integer('telefono');
      table.string('tipoSangre',25).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('alumnos')
  }
}

module.exports = AlumnosSchema
