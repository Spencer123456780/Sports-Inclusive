import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 5000;
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
}
else {
  console.log("Creating new data storage");
  var obj = {user:[]}
}


app.post('/newuser', (req, res) =>{
  console.log(req.body.Firstname)
  const firstname = req.body.Firstname
  const lastname = req.body.Lastname
  const email = req.body.Email
  const password = req.body.Password
  const passwordCon = req.body.ConfirmPassword
  const rs = {firstname, lastname, email, password, passwordCon}
  console.log(JSON.stringify(rs))
  
  if(!rs.email || !rs.firstname || !rs.lastname || !rs.password && rs.password != rs.passwordCon){
    let outcome = {
      info:"Please fill in all catogories or confirm that passwords are matching"
    }
    res.send(outcome);
  }
  else{
    obj.user.push({
      firstname:req.body.Firstname,
      lastname:req.body.Lastname,
      email:req.body.Email,
      password:req.body.Password
    });
    let data = JSON.stringify(obj, null, 2);
    fs.writeFile('dataset.json', data, confirm);
  }
});

