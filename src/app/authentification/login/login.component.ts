import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
  }

  checkUser(event){
    event.preventDefault();
    console.log(event);
    var name = event.target.elements[0].value;
    var password = event.target.elements[1].value;
    

    this.LoginService.checkUser(name, password);

  }

}
