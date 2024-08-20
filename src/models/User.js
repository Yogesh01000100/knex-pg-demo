const knex = require('knex')(require('../config/knexfile').development);

class User {
  static async findAll() {
    return await knex('users').select('*');
  }

  static async create(userData) {
    return await knex('users').insert(userData).returning('*');
  }

  static async find(id) {
    return await knex('users').where({ id }).first();
  }

  static async update(id, userData) {
    return await knex('users').where({ id }).update(userData).returning('*');
  }

  static async delete(id) {
    return await knex('users').where({ id }).del();
  }
}

module.exports = User;
