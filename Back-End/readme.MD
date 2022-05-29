Reference: https://www.youtube.com/watch?v=T8mqZZ0r-RA

I. Install dependencies
1) cd into Back-End folder
2) 'npm init' in terminal 
3) npm install express
4) npm install body-parser
5) npm install mysql
6) npm install nodemon

II. Create express server and configure nodemon
7) Go into index. js, fill it with boilterplate
8) go into package.json, fill under scripts with:
    "start": "node index.js",
    "devStart": "nodemon index.js",

This is so we can run the server continously with nodemon.
9) Command to run the server is "npm run devStart"

III. Configure database
10) Upload .sql file to your desired database
11) set 'const nysqk = require('mysql') in index.js header
12) Set:
const db = mysql.createPool({
    host:
    user:
    password:
    database:
})

IV. Back to the front-end
13) cd into Front-End
14) 'npm i axios'
15) Create routes (back-end)
16) Create axios post (front-end)

IV. Test inputs
17) cd into Back-End
18) npm install cors