require('dotenv').config({ path: '../../.env' });

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