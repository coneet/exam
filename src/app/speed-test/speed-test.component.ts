import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speed-test',
  templateUrl: './speed-test.component.html',
  styleUrls: ['./speed-test.component.css']
})
export class SpeedTestComponent implements OnInit {

  public selectSpeedTest: number;
  public currentMonth: any;
  public st_list: any;
  constructor(private http: HttpClient) {
    const doj = new Date();
    this.currentMonth = doj.toISOString().substr(0, 10);
    this.getStInfo(this.currentMonth)
  }

  ngOnInit() {
  }

  getStInfo(date) {
    this.http.get('/api/apps.php?get=getStInfo&date=' + date).subscribe((res) => {
      this.st_list = res;
    });
  }

}
