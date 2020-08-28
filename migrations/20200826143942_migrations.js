exports.up = function (knex) {
    return knex.schema
        .createTable('instructions', tbl => {
            tbl.increments('Id');
            tbl.text('instructions', 500).notNullable();
            tbl.integer('step_number')
                .unsigned()
                .notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('Id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('ingredients', tbl => {
            tbl.increments('Id');
            tbl.text('ingredient', 128).notNullable();
            tbl.text('quantity').notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('Id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

        })
        .createTable('recipes', tbl => {
            tbl.increments('Id');


            tbl.text('name')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe');
};
