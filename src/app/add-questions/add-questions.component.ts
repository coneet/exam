import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  public subjects: any;
  public chapters: any;
  public subChapters: any;
  public selectedSubject: any;
  public selectedChapter: any;
  public selectedSubChapter: any;
  public newQuestion: any;
  public questionAnswer: any;
  public optionA: any;
  public optionB: any;
  public optionC: any;

  constructor(private http: HttpClient) {
    this.getSubjects();
    this.selectedSubChapter = 0;
  }

  ngOnInit() {
  }

  getSubjects() {
    this.http.get('/api/apps.php?get=subjects').subscribe((res) => {
      this.subjects = res;
    });
  }

  getSubChapters(chapter_id) {
    this.http.get('/api/apps.php?get=getSubChapter&chapter_id=' + chapter_id).subscribe((res) => {
      const totals = [];
      if (Object.keys(res).length > 0) {
        this.subChapters = res;
      } else {
        this.subChapters = [];
      }
    });
  }

  selectSubject(subject_id) {
    this.http.get('/api/apps.php?get=chapters&subject_id=' + subject_id).subscribe((res) => {
      this.chapters = res;
    });
  }

  addNewQuestion() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let params = new HttpParams()
      .set('subject', this.selectedSubject)
      .set('chapter', this.selectedChapter)
      .set('subchapter', this.selectedSubChapter)
      .set('question', this.newQuestion)
      .set('answer', this.questionAnswer)
      .set('option_a', this.optionA)
      .set('option_b', this.optionB)
      .set('option_c', this.optionC)

    this.http.post('/api/apps.php?get=newQuestion', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).subscribe((res) => {
      if (res > 0) {
        this.newQuestion = '';
        this.questionAnswer = '';
        this.optionA = '';
        this.optionB = '';
        this.optionC = '';
      } else {
        alert('Question Exists!');
      }
    });
  }
}
