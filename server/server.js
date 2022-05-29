const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());
//connection

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "bencom",
});

app.get("/", (req, res) => {
  res.send("Hello World Mohamad und Renad!");
});

app.post("/createCoAccount", (req, res) => {
  const company_name = req.body.company_name;
  const origin = req.body.origin;
  const found_date = req.body.found_date;
  const reg_nr = req.body.reg_nr;
  const street = req.body.street;
  const city = req.body.city;
  const tel_nr = req.body.tel_nr;
  const fax_nr = req.body.fax_nr;
  const add_to_address = req.body.add_to_address;
  const first_name_rep = req.body.first_name_rep;
  const last_name_rep = req.body.last_name_rep;
  const email_company = req.body.email_company;
  const email_rep = req.body.email_rep;
  const password = req.body.password;
  const tel_nr_rep = req.body.tel_nr_rep;
  const mobile_nr_rep = req.body.mobile_nr_rep;
  const haus_nr = req.body.haus_nr;
  const post_code = req.body.post_code;

  db.query(
    "INSERT INTO companies (company_name,	origin,	found_date,	reg_nr,	street,	haus_nr,	post_code	,city,	tel_nr,	fax_nr,	email_company,	add_to_address,	first_name_rep,	last_name_rep,	password,	email_rep,	tel_nr_rep,	mobile_nr_rep,	role) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      company_name,
      origin,
      found_date,
      reg_nr,
      street,
      haus_nr,
      post_code,
      city,
      tel_nr,
      fax_nr,
      email_company,
      add_to_address,
      first_name_rep,
      last_name_rep,
      password,
      email_rep,
      tel_nr_rep,
      mobile_nr_rep,
      "company",
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

// createStAccount
app.post("/createStAccount", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const birth_date = req.body.birth_date;
  const birth_place = req.body.birth_place;
  const nationality = req.body.nationality;
  const sex = req.body.sex;
  const tel_nr = req.body.tel_nr;
  const mobile_nr = req.body.mobile_nr;
  const email = req.body.email;
  const living_place = req.body.living_place;
  const street = req.body.street;
  const password = req.body.password;
  const haus_nr = req.body.haus_nr;
  const post_code = req.body.post_code;
  const co = req.body.co;
  const add_to_address = req.body.add_to_address;
  const university = req.body.university;
  const personal_id_nr = req.body.personal_id_nr;
  console.log(req.body);
  db.query(
    "INSERT INTO students (first_name,	last_name	,birth_date	,birth_place,	nationality,	tel_nr,	mobile_nr,	email	,living_place,	street,	haus_nr,	post_code,	co,	password,	university,	add_to_address,	personal_id_nr,	role,	sex) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      first_name,
      last_name,
      birth_date,
      birth_place,
      nationality,
      tel_nr,
      mobile_nr,
      email,
      living_place,
      street,
      haus_nr,
      post_code,
      co,
      password,
      university,
      add_to_address,
      personal_id_nr,
      "student",
      sex,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`The app listening on port ${port}`);
});
/*const http = require('http');
const fs = require('fs');
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

//console.log(routes.someText);

const server = http.createServer(requestHandler);

server.listen(8080);*/
