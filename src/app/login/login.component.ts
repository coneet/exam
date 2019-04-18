import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: String;
  public password: String;
  constructor(private router: Router) {
    if (window.sessionStorage.getItem('login_key') === 'Rupali') {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.user.toLowerCase() === 'vineet'.toLocaleLowerCase() && this.password.toLowerCase() === 'vineet') {
      window.sessionStorage.setItem('login_key', 'Rupali');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid Credentials');
    }
  };

}
