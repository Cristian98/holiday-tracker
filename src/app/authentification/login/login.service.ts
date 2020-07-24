import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  user = new User('Cristian', 'parola', 'cristian@cristian.ro', 'Dev');

  public checkUser(name: string, password: string){
      if(this.user.name == name && this.user.password == password){
        console.log("Succes");
      } else {
        console.log("Failed")
      }
  }
}
