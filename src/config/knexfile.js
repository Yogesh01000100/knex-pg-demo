require('dotenv').config({ path: __dirname + '/.env' });

console.log("Database connection settings:", process.env.DB_HOST);
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
        migrations: {
            directory: __dirname + '/../db/migrations',
        },
        seeds: {
            directory: __dirname + '/../db/seeds',
        }
    }
};


/*

local:

exports.up = async (knex) => {
  return await knex.schema.createTable("logs", function (table) {
    table.string("sessionID").notNullable();
    table.string("type").notNullable();
    table.string("key").notNullable();
    table.string("operation").notNullable();
    table.string("timestamp").notNullable();
    table.string("data").notNullable();
    table.primary("key");
  });
};

exports.down = async (knex) => {
  return await knex.schema.dropTable("logs");
};

remote:

exports.up = async (knex) => {
  return await knex.schema.createTable("remote-logs", function (table) {
    table.string("key").notNullable();
    table.string("hash").notNullable();
    table.string("signature").notNullable();
    table.string("signerPubKey").notNullable();
    table.primary("key");
  });
};

exports.down = async (knex) => {
  return await knex.schema.dropTable("remote-logs");
};
*/