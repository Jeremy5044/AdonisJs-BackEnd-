'use strict'

const Lucid = use('Lucid')
const User = use('App/Model/User')

class Token extends Lucid {

  user () {
    return this.belongsTo(User)
  }

}

module.exports = Token
