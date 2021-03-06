
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TaskSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('description', 200).notNullable();
      table.string('title', 30).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('tasks');
  }
}

module.exports = TaskSchema;
