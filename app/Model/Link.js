'use strict'

const Lucid = use('Lucid')

class Link extends Lucid {
	comments(){
		return this.hasMany('App/Model/Comment')
	}
}

module.exports = Link
