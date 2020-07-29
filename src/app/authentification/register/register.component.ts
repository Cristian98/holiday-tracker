import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import {FormControl} from '@angular/forms';

// interface Team {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  

  // teams: Team[] = [
  //   {value: 'Dev', viewValue: 'Dev'},
  //   {value: 'Q&A', viewValue: 'Q&A'},
  //   {value: 'Admin', viewValue: 'Admin'}
  // ];
  

  constructor(private RegisterService: RegisterService) { }

  ngOnInit(): void {
  }

  registerUser(event){
    event.preventDefault();
    console.log(event);
    var name = event.target.elements[0].value;
    var password = event.target.elements[1].value;
    var email = event.target.elements[2].value;
    var grupa = event.target.elements[3].value;

    this.RegisterService.register(name, password, email, grupa);

  }
  disableSelect = new FormControl(false);

  

}
