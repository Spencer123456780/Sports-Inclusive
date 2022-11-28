import express, { json } from 'express';
const app = express();
const PORT = process.env.PORT || 5000;
import cors from 'cors';
import fs from 'fs';
import _ from 'underscore';
import { exit } from 'process';

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


var exists = fs.existsSync('dataset.json');
if(exists) {
  console.log("loading into the users data");
  var data = fs.readFileSync('dataset.json', 'utf8');
  obj = JSON.parse(data);
} else {
  console.log("Creating new data storage")
  var obj = {user:[]};
}


app.post('/newuser', (req, res) => {
  console.log(req.body.Firstname)
  const Firstname = req.body.Firstname
  const Lastname = req.body.Lastname
  const Email = req.body.Email
  const Password = req.body.Password
  const rs = {Firstname, Lastname, Email, Password}
  
  console.log(JSON.stringify(rs))
  
  if(!rs.Email || !rs.Firstname || !rs.Lastname){
    let outcome = {
      info:"Please fill in all catogories or confirm that passwords are matching"
    }
    res.send(outcome);
  }
  else{
    obj.user.push({
      Firstname:req.body.Firstname,
      Lastname:req.body.Lastname,
      Email:req.body.Email,
      Password:req.body.Password
    });
    let data = JSON.stringify(obj, null, 2);
    fs.writeFile('dataset.json', data, confirm);
    function confirm(err)
            {         
            let outcome={
                name:req.body.fname,
                status:"success",
                info:` :Data is recived thank you  ${firstname}`
             }
             res.send(outcome);
             console.log(outcome);
          }
     }
});

