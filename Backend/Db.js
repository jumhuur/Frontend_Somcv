const  mysql = require("mysql")
const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "-+jumhuur-+741",
    database:"takriim",
})


module.exports = db