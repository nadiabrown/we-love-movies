// deleteMigrations.js

const knex = require("knex")(require("./knexfile").development);

knex("knex_migrations")
  .delete()
  .whereIn("name", [
    "20240410143837_add_critics_table.js",
    "20240414195553_createMoviesTable.js",
    "20240414203401_createTheatersTable.js",
    "20240414202512_createReviewsTable.js",
  ])
  .then(() => {
    console.log("Migration records deleted successfully.");
    return knex.destroy(); // Close the database connection
  })
  .catch((error) => {
    console.error("Error deleting migration records:", error);
    return knex.destroy(); // Close the database connection
  });
