const db = require("../db/connection");

module.exports.offerPost = (req, res) => {
  const title_offer = req.body.title_offer;
  const days_nr = req.body.days_nr;
  const per_hour_money = req.body.per_hour_money;
  const city = req.body.city;
  const neighbourhood = req.body.neighbourhood;
  const persons_nr = req.body.persons_nr;
  const day_name = req.body.day_name;
  const hours_nr = req.body.hours_nr;
  const time_from = req.body.time_from;
  const time_until = req.body.time_until;
  const date = req.body.date;
  const describtion = req.body.describtion;
  const notes_and_requirements = req.body.notes_and_requirements;
  const street = req.body.street;
  const post_code = req.body.post_code;
  const add_to_address = req.body.add_to_address;
  const companyId = req.body.companyId;

  db.query(
    "INSERT INTO job (id_company,	title_job,	days_nr	,per_hour_money,	city,	neighborhood,	persons_nr,	day_name,	hours_nr,	time_from,	time_until,	date	,describtion	,note_and_requirements,	street,	haus_nr	,post_code,	add_to_address) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      companyId,
      title_offer,
      days_nr,
      per_hour_money,
      city,
      neighbourhood,
      persons_nr,
      day_name,
      hours_nr,
      time_from,
      time_until,
      date,
      describtion,
      notes_and_requirements,
      street,
      hours_nr,
      post_code,
      add_to_address,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        return res.status(200).send("Values Inserted");
      }
    }
  );
};

module.exports.getAllOffers = (req, res) => {
  db.query("SELECT * FROM job", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "error" });
    } else {
      console.log(result);
      return res.status(200).send(result);
    }
  });
};

module.exports.getDetails = (req, res) => {
  let offerId = req.params.id;
 // console.log(offerId);

  db.query("SELECT * FROM job WHERE id = ? ", [offerId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "error" });
    } else {
      console.log(result);
      return res.status(200).send(result);
    }
  });
};

module.exports.applayOffer = (req, res) => {
  const id_job = req.body.id_job;
  const id_student = req.body.id_student;
  const id_company = req.body.id_company;
  const status = req.body.status;

  db.query(
    "INSERT INTO applied (id_job,id_student,	id_company	,status) VALUES (?,?,?,?)",
    [id_job, id_student, id_company, status],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        return res.status(200).send("Values Inserted");
      }
    }
  );
};

module.exports.getApplayReq = (req, res) => {
  db.query(
    "SELECT student.first_name, student.last_name, company.company_name, job.id, job.title_job, applied.id_application FROM `applied` INNER JOIN job ON applied.id_job = job.id INNER JOIN student ON applied.id_student = student.id INNER JOIN company ON applied.id_company = company.id WHERE  status = 'applied' ",
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};

module.exports.getAppliedStudent = (req, res) => {
  const userId = req.query.userId;
  
  const appStatus = "applied"; //id job get
  db.query(
    "SELECT * FROM `applied` INNER JOIN job ON applied.id_job = job.id WHERE id_student = ? AND status = ? ",
    [userId, appStatus],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};

module.exports.approveReq = (req, res) => {
  const id_application = req.query.id_application;
  const appliedStatus = "upComming";
  db.query(
    "UPDATE applied SET status = ? WHERE id_application = ?",
    [appliedStatus, id_application],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};

module.exports.getUpcommingStudent = (req, res) => {
  const userId = req.query.userId;
  
  const appStatus = "upComming"; 
  db.query(
    "SELECT * FROM `applied` INNER JOIN job ON applied.id_job = job.id WHERE id_student = ? AND status = ? ",
    [userId, appStatus],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};

module.exports.getFinishedStudent = (req, res) => {
  const userId = req.query.userId;
  
  const appStatus = "finished"; 
  db.query(
    "SELECT * FROM `applied` INNER JOIN job ON applied.id_job = job.id WHERE id_student = ? AND status = ? ",
    [userId, appStatus],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};

module.exports.getOfferCompany = (req, res) => {
  const userId = req.query.userId;
  
  db.query("SELECT * FROM job WHERE id_company = ?",[userId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "error" });
    } else {
      console.log(result);
      return res.status(200).send(result);
    }
  });
};

module.exports.getAppliedCompany = (req, res) => {
  const userId = req.query.userId;
  
  const appStatus = "applied"; //id job get
  db.query(
    "SELECT job.id ,student.first_name, student.last_name, job.title_job FROM `applied` INNER JOIN job ON applied.id_job = job.id INNER JOIN student ON applied.id_student = student.id WHERE applied.id_company = ? AND status = ?",
    [userId, appStatus],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};

module.exports.getUpcommingCompany = (req, res) => {
  const userId = req.query.userId;
  
  const appStatus = "upComming"; //id job get
  db.query(
    "SELECT job.id ,student.first_name, student.last_name, job.title_job FROM `applied` INNER JOIN job ON applied.id_job = job.id INNER JOIN student ON applied.id_student = student.id WHERE applied.id_company = ? AND status = ?",
    [userId, appStatus],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};
module.exports.getFinishedCompany = (req, res) => {
  const userId = req.query.userId;
  
  const appStatus = "finished"; //id job get
  db.query(
    "SELECT job.id ,student.first_name, student.last_name, job.title_job FROM `applied` INNER JOIN job ON applied.id_job = job.id INNER JOIN student ON applied.id_student = student.id WHERE applied.id_company = ? AND status = ?",
    [userId, appStatus],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};


module.exports.getUpcommingAdmin = (req, res) => {
  const userId = req.query.userId;
  
  const appStatus = "upComming"; 
  db.query(
    "SELECT * FROM `applied` INNER JOIN job ON applied.id_job = job.id WHERE  status = ? ",
    [userId, appStatus],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
      } else {
        console.log(result);
        return res.status(200).send(result);
      }
    }
  );
};





