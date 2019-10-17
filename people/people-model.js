const db = require('../data/dbConfig')

module.exports = {
    insert,
    remove,
  };

async function insert(person) {
    const [id] = await db('people')
    .insert(person, 'id')

    return db('people').where({id}).first()
}

async function remove(id) {
    return db('people').where('id', id).del()
}