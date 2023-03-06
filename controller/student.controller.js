const db = require('../database');

   // Post data
exports.postData = (req, res) => {
      const values = [
        req.body.username,
        req.body.email,
      ]

    const sql = "INSERT INTO student(username, email) VALUES(?)";
    db.query(sql,[values], (error, result) => {
        if(!error) {
            console.log("Success to inserted ");
           res.json(result)

        }
    })
}

// get Data 

exports.getData = (req, res) => {
    db.query("SELECT * FROM student", (error, result) => {
        if(!error) {
            res.json(result)
        } else {
            console.error(error.message)
        }
    })
}

// delete data 

 exports.deleteData = (req, res) => {
     const userid = req.params.id;
     const sql = "DELETE FROM student WHERE userid = ?"
      db.query(sql, [userid] , (error, result) => {
          if(!error) {
              console.log("Success to Deleted");
              res.json(result)
          }
      })
 }

 // update data 

 exports.updateData = (req, res) => {
     const {username, email} = req.body;
     const userid = req.params.id;
     const sql = `UPDATE student SET username='${username}' , email='${email}' WHERE userid = ?`;

     db.query(sql, [userid], (error, result) => {
         if(!error) {
             console.log('Success Updated ');
             res.json(result)
         } else {
             console.error(error.message)
         }
     })

 }