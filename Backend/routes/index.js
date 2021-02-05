var express = require('express');
var router = express.Router();
const app = express();


app.listen(3001,function(){
  console.log("express server is running on port 3000");
})

app.get('/',function(res,req){
  res.send('Express here')
})

let users=[
  {email:'abcd@yahoo.com',password:'password'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send("welcome to backend");
});

router.post('/login',function(req,res){
let result =users.find(user=>user.email==req.body.email);
if(result){
  if(result.password==req.body.password){
    res.status(200).send({
      message:"Login Success"
    })

  }else{
    res.send(200).send({
      message:"password Invalid"
    })
  }
}
})

module.exports = router;
