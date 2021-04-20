console.log(
  "This script is for development use only! Do NOT create a production database with this!!!"
);

const host = "localhost"
const admin = "admin"
const adminPass = "Admin123."

const myDatabase = "database";
const username = "databaseUser";
const password = "databasePassword";

db = connect(host + "/admin")

db.auth(admin, adminPass)

db.getSiblingDB(database)

db.createUser({
  user: username,
  pwd: password,
  roles: [{ role: "readWrite", db: myDatabase }],
});
