import { Component } from '@angular/core';
import fetch from 'node-fetch';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  async Backend_API_Login() {
    
  
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    console.log(username);
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    const json_body = {"username":username, "password":password}
    const message = await fetch("http://localhost:5000/login",  {method:"POST", body: JSON.stringify(json_body), headers: {'Content-Type': 'application/json'}});
  
    const data = await message.json();
    
    console.log(data);
  }
}



