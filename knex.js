const dbConfig = {
    client: 'mysql',
    debug: false,
    connection: {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        charset   : 'utf8',
    }
};

module.exports = require('knex')(dbConfig);