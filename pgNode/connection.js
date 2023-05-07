const { Client } = require("pg");

// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "1234",
//   database: "dummy",
// });
const client = new Client({
  host: "13.232.251.28",
  user: "app_user",
  port: 5432,
  password: "NeoDove@1234",
  database: "neodove_stag",
});

module.exports = client;
