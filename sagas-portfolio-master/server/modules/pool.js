const pg = require('pg');
const url = require('url');

let config = {};

config = {
    host: 'localhost', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    database: 'portfolio', // change this line if you want to use a different database
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };

  const pool = new pg.Pool(config);

  module.exports = pool;