const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/connection");

module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  
  db.query(
    "SELECT * FROM student WHERE email  = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json({ message: "error" });
      } else if (result.length > 0) {
        const hashedPassword = result[0].password;
        if (await bcrypt.compare(password, hashedPassword)) {
          const id = result[0].id; // take the id for the user for Token
          const token = await jwt.sign(
            {
              id,
              role: result[0].role,
              name: result[0].first_name + " " + result[0].last_name,
            },
            "jwtSecret",
            {
             // expiresIn: 120,
            }
          ); //create a token
          return res.status(200).json({ message: "logging succes", token });
        } else {
          return res.status(400).json({ message: "Das Passwrot ist falsch" });
        }
      } else {
        db.query(
          "SELECT * FROM company WHERE email_company  = ?",
          [email],
          async (err, result) => {
            if (err) {
              return res.status(500).json({ message: "error" });
            } else if (result.length > 0) {
              const hashedPassword = result[0].password;
              if (await bcrypt.compare(password, hashedPassword)) {
                return res.status(200).json({ message: "loggedin" });
              } else {
                return res
                  .status(400)
                  .json({ message: "Das Passwrot ist falsch" });
              }
            }else {
              return res
                .status(400)
                .json({ message: "Email nicht existiert" });
            }
          }
        );
      }
    }
  );
};

module.exports.signupCo = async (req, res) => {
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
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  db.query(
    "SELECT COUNT(*) AS co FROM company WHERE email_rep = ?",
    [email_rep],
    (err, result) => {
      const exist1 = result[0].co;
      if (exist1 > 0) {
        return res.status(400).json({ message: "Email ist bereits existiert" });
      } else {
        db.query(
          "SELECT COUNT(*) AS co FROM student WHERE email = ?",
          [email_rep],
          (err, result) => {
            const exist2 = result[0].co;
            if (exist2 > 0) {
              return res
                .status(400)
                .json({ message: "Email ist bereits existiert" });
            } else {
              db.query(
                "INSERT INTO company (company_name,	origin,	found_date,	reg_nr,	street,	haus_nr,	post_code	,city,	tel_nr,	fax_nr,	email_company,	add_to_address,	first_name_rep,	last_name_rep,	password,	email_rep,	tel_nr_rep,	mobile_nr_rep,	role) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
                  hashedPassword,
                  email_rep,
                  tel_nr_rep,
                  mobile_nr_rep,
                  "company",
                ],
                (err, result) => {
                  if (err) {
                    return res.status(400).json({ message: "error" });
                  } else {
                    return res.status(200).send("Values Inserted");
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

module.exports.signupSt = async (req, res) => {
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

  const hashedPassword = await bcrypt.hash(password, 10);
  db.query(
    "SELECT COUNT(*) AS co FROM student WHERE email = ?",
    [email],
    (err, result) => {
      const exist1 = result[0].co;
      if (exist1 > 0) {
        return res.status(400).json({ message: "Email ist bereits existiert" });
      } else {
        db.query(
          "SELECT COUNT(*) AS co FROM company WHERE email_company = ?",
          [email],
          (err, result) => {
            const exist2 = result[0].co;
            if (exist2 > 0) {
              return res
                .status(400)
                .json({ message: "Email ist bereits existiert" });
            } else {
              db.query(
                "INSERT INTO student (first_name,	last_name	,birth_date	,birth_place,	nationality,	tel_nr,	mobile_nr,	email	,living_place,	street,	haus_nr,	post_code,	co,	password,	university,	add_to_address,	personal_id_nr,	role,	sex) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
                  hashedPassword,
                  university,
                  add_to_address,
                  personal_id_nr,
                  "student",
                  sex,
                ],
                (err, result) => {
                  if (err) {
                    return res.status(400).json({ message: "error with database" });
                  } else {
                    return res.status(200).json({ message: "done" });
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};