const Pool = require ('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password: '2024',
    host:'localhost',
    port: 5432,
    database: 'perbtodo'
});

module.exports = pool;