import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  logout() {
    window.sessionStorage.removeItem('login_key');
    this.router.navigate(['/login']);
  }

}
