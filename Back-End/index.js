// Reference: https://www.youtube.com/watch?v=T8mqZZ0r-RA
// Utilized and adapted code from this tutorial video, credit to PedroTech

// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');


// db connection
const db = mysql.createPool({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_kamanda',
    password: '9279',
    database: 'cs340_kamanda',
});

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// get bsg_people data from the database for table display
app.get('/getPeople', (req, res) => {
    const select = "SELECT * FROM bsg_people";
    db.query(select, (err, result) => {
        res.send(result)
    });
});

// post user input values to insert a new person into the database
app.post("/addPerson", (req, res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const homeworld = req.body.homeworld;
    const age = req.body.age;


    const insert = "INSERT INTO bsg_people (fname, lname, homeworld, age) VALUES (?,?,?,?)"
    db.query(insert, [fname, lname, homeworld, age], (err, result) => {
        console.log(result);
    });
});

// port
app.listen(3001, () => {
    console.log("running on port 3001")
});