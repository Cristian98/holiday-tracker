import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        component: LoginComponent
      }

    ])
  ]
})
export class AuthentificationModule { }
