import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  public subjectName: any;
  public description: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addNewSubject() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let params = new HttpParams()
      .set('subjectName', this.subjectName)
      .set('description', this.description);

    this.http.post('/api/apps.php?get=newSubject', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).subscribe((res) => {
      if (res['rows'] < 0) {
        alert('Subject Exists');
      } else {
        alert('Added');
      }
    });
  }

}
