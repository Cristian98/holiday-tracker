import { Injectable } from '@angular/core';
import {User} from '../login/user'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  contNou;
  constructor() { }

  public register(name: string, password: string, email: string, grupa: string){
    this.contNou = new User(name, password, email, grupa)

    var testUser = { "name" : name, "password" :  password, "email" : email, "grupa" : grupa};

    localStorage.setItem("testUser", JSON.stringify(testUser));

    console.log(localStorage.getItem("testUser"))
  }
}
