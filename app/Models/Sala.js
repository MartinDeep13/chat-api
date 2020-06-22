'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sala extends Model {

  static get table () {
    return 'salas'
  }

  messages () {
    return this.hasMany('App/Models/Message')
  }

}

module.exports = Sala
