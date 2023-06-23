import { Component } from '@angular/core';
import fetch from 'node-fetch';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  async Backend_API_Login() {
    var SHA256 = require("crypto-js/sha256");
  
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = String(SHA256((<HTMLInputElement>document.getElementById('password')).value));
    console.log(password);
    const json_body = {"username":username, "password":password}
    const message = await fetch("http://localhost:5000/login",  {method:"POST", body: JSON.stringify(json_body), headers: {'Content-Type': 'application/json'}});
  
    const data = await message.json();
    
    console.log(data);
  }
}



