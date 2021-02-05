import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
       render() { 
        return ( 

            <form onSubmit={(e)=>(login(e))}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        //   <form onSubmit={this.handleSubmit}>
        //       <input type="email" placeholder="your email address" required></input>
        //       <input type="password" placeholder="Your password" required></input>
        //       <button onSubmit={this.handleSubmit}>Log In</button>
        //   </form>

        
         );
    }
}
 
function login(e){
    e.preventDefault();
    let request={
        email:document.getElementById('exampleInputEmail1').value,
        password:document.getElementById('exampleInputPassword1').value
   }
   axios.post('http://localhost:3000/login',request)
   .then(resp=>{
       alert(resp.data.message);
   })
   .catch(err=>{
       console.log(err);
   })
}
export default Login;