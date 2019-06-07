'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillsSchema extends Schema {
    up () {
        this.create('bills', (table) => {
            table.increments()
            table.string('name', 80).notNullable().unique()
            table.string('occurance', 20).notNullable()
            table.timestamps()
        })
    }

    down () {
        this.drop('bills')
    }
}

module.exports = BillsSchema
