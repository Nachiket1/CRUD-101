const { Pool } = require('pg');

// Connect PostgreSQL Database
const pool = new Pool({
  connectionString: process.env.SQL_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    pool.query(text, params, callback);
  },
};
