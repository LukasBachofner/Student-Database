import { Component } from '@angular/core';
import fetch from 'node-fetch';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  constructor (private router:Router){}

  async Backend_API_Login() {
    var SHA256 = require("crypto-js/sha256");
  
    const username : String = (<HTMLInputElement>document.getElementById('username')).value;
    const password : String = String(SHA256((<HTMLInputElement>document.getElementById('password')).value));
    const json_body = {"username":username, "password":password}
    const message = await fetch("http://localhost:5000/login",  
    {method:"POST", body: JSON.stringify(json_body), headers: {'Content-Type': 'application/json'}});
  
    const data = await message.json();


    if (data == "200"){
  	  this.router.navigate(["/overview"]);
    }
    else{
      console.log("Error");
    }
  }
}



