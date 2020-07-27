'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MateriasSchema extends Schema {
  up () {
    this.create('materias', (table) => {
      table.increments()
      table.string('nombre').notNullable();
      table.string('descripcion').notNullable();
      table.string('plan').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('materias')
  }
}

module.exports = MateriasSchema
