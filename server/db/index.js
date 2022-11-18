const { Pool } = require("pg");

//poll will connect to postgres DB
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "yelp",
  password: "Pk@916820",
  port: 5432,
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
