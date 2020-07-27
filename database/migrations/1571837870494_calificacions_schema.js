'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CalificacionsSchema extends Schema {
  up () {
    this.create('calificacions', (table) => {
      table.increments()
      table.integer('idRegistro').unsigned().references('id').inTable('registros').onDelete('cascade')
      table.integer('calificacion').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('calificacions')
  }
}

module.exports = CalificacionsSchema
