import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { users } from './users';
import { UsersService } from './users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public comUser = '';
  public info = '';
  public data: any;

  constructor(private userData: UsersService, private router: Router) { }


  ngOnInit(): void {
  }

  logowanie(email, password) {
    this.userData.getUserData().subscribe((result) => {
      console.log(result);
      this.data = result;

    for (let item of this.data){
      if (item.email == email.value && item.password == password.value){
        document.querySelector("input[name='email']").classList.add("valid");
        document.querySelector("input[name='password']").classList.add("valid");
        this.comUser = 'Znaleziono użytkownika, za chwilę nastąpi przekierowanie';
        this.info = 'Wylogowanie nastąpi za 10 minut';

        setTimeout( () => {
            this.router.navigate(['/seats']);
        }, 2500);

        setTimeout( () => {
            this.info = 'Wylogowano';
            email.value = '';
            password.value = '';
            this.router.navigate(['/flight']);
            localStorage.clear();
        }, 600000);
        break;
      }

      else{
        this.comUser = 'Wprowadzono nieprawidłowy e-mail i hasło lub użytkownik nie istnieje';
        document.querySelector("input[name='email']").classList.add("invalid");
        document.querySelector("input[name='password']").classList.add("invalid");
      }
    }
    })
  }
  }
