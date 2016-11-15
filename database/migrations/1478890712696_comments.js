'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.integer('link_id')
      table.integer('user_id')
	  table.string('comment')
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
