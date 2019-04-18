import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public display_menu: number = -1;
  constructor(public router: Router) {
    if (!window.sessionStorage.getItem('login_key')) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
