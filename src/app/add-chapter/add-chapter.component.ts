import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {

  public subjects: any;
  public chapter: any;
  public selectedSubject: any;
  public chapterName: any;

  constructor(private http: HttpClient) {
    this.getSubjects();
  }

  ngOnInit() {
  }

  getSubjects() {
    this.http.get('/api/apps.php?get=subjects').subscribe((res) => {
      this.subjects = res;
    });
  }

  addNewChapter() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let params = new HttpParams()
      .set('subject', this.selectedSubject)
      .set('chapter', this.chapterName);

    this.http.post('/api/apps.php?get=newChapter', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).subscribe((res) => {
      if (res['rows'] < 0) {
        alert('Chapter Exists');
      } else {
        alert('Added');
      }
    });
  }
}
