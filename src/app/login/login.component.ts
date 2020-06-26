import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from './users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public comUser = '';

  public info = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logowanie(email, password){
    console.log(email.value);
    console.log(password.value);

    for (let i = 0; i < users.length; i++){
      if (users[i].email == email.value.toLowerCase() && users[i].password == password.value){

        document.querySelector("input[name='email']").classList.add("valid");
        document.querySelector("input[name='password']").classList.add("valid");
        this.comUser = 'Znaleziono użytkownika, za chwilę nastąpi przekierowanie';
        this.info = 'Wylogowanie nastąpi za 2 minuty';

        setTimeout( () => {
            this.router.navigate(['/seats']);
        }, 2500);

        setTimeout( () => {
            this.info = 'Wylogowano';
            email.value = '';
            password.value = '';
            this.router.navigate(['/flight']);
            localStorage.clear();
        }, 120000);
        break;
      }

      else{
        this.comUser = 'Wprowadzono nieprawidłowy e-mail i hasło lub użytkownik nie istnieje';
        document.querySelector("input[name='email']").classList.add("invalid");
        document.querySelector("input[name='password']").classList.add("invalid");
      }
    }
  }
}
