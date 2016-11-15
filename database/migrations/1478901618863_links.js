'use strict'

const Schema = use('Schema')

class LinksTableSchema extends Schema {

  up () {
    this.create('Links', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.string('title')
      table.string('url')
    })
  }

  down () {
    this.drop('Links')
  }

}

module.exports = LinksTableSchema
