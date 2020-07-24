import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterComponent,
    LoginComponent,
    CommonModule
  ]
})
export class AuthentificationModule { }
