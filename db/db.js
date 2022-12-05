import mysql from "mysql2"
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USERNAME,
    password : process.env.PASSWORD,
    database : process.env.DB
});

db.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

export { db };
