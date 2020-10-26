import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('person',table=>{
        table.increments('id_person').primary();
        table.string("nome_usuario").notNullable();
        table.decimal('altura').notNullable();
        table.integer('lactose').notNullable();
        table.decimal('peso').notNullable();
        table.integer('atleta').notNullable();
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('person');
}