import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-setup-test',
  templateUrl: './setup-test.component.html',
  styleUrls: ['./setup-test.component.css']
})
export class SetupTestComponent implements OnInit {

  public subjects: any;
  public chapters: any;
  public subChapters: any;
  public selectedSubject: any;
  public selectedChapter: any;
  public selectedSubChapter: any;
  public setup: any;
  public totalQuestions: any;
  public selectedTotalQuestions: number;
  public starting_point: number;
  public actionType: string;
  public hardQuestion: any;
  public questionNumberStartFrom: any;

  constructor(private http: HttpClient, private router: Router) {
    this.getSubjects();
    this.selectedSubChapter = 0;
    this.actionType = "";
    this.hardQuestion = false;
    this.starting_point = 0;
    this.totalQuestions = [];
    this.questionNumberStartFrom = [];
  }

  ngOnInit() {
  }

  getSubjects() {
    //console.log( APP_BASE_HREF );
    this.http.get('/api/apps.php?get=subjects').subscribe((res) => {
      this.subjects = res;
    });
  }

  selectChapter(chapter_id) {
    this.http.get('/api/apps.php?get=questions&chapter_id=' + chapter_id).subscribe((res) => {
      if (Object.keys(res).length > 0) {
        this.numberQuestion(Object.keys(res).length);
      } else {
        this.totalQuestions = [];
      }
    });
    this.http.get('/api/apps.php?get=getSubChapter&chapter_id=' + chapter_id).subscribe((res) => {
      const totals = [];
      if (Object.keys(res).length > 0) {
        this.subChapters = res;
      } else {
        this.subChapters = [];
      }
    });
  }

  numberQuestion(questions) {
    let number_ceil = Math.ceil(questions / 10) * 10;
    let index = 1;
    while ((index * 10) <= number_ceil) {
      this.totalQuestions[index - 1] = (index * 10);
      index++;
    }
    index = 0;
    while ((index * 10) < number_ceil) {
      this.questionNumberStartFrom[index] = (index * 10);
      index++;
    }
  }

  selectSubject(subject_id) {
    this.http.get('/api/apps.php?get=chapters&subject_id=' + subject_id).subscribe((res) => {
      this.chapters = res;
    });
  }

  onRegisterSubmit() {
    if (this.selectedTotalQuestions - this.starting_point <= 0) {
      alert('Please select No. of Questions greater than Start From');
      return false;
    }
    let params = {
      queryParams: {
        chapter_id: this.selectedChapter,
        total_questions: (this.selectedTotalQuestions - this.starting_point),
        start_from: this.starting_point,
        sub_chapter: this.selectedSubChapter,
        is_hard: this.hardQuestion
      }
    };
    if (this.actionType === 'test') {
      this.router.navigate(['/test'], params);
    } else if (this.actionType === 'learn') {
      this.router.navigate(['/learn'], params);
    } else {
      alert('Please try again!');
    }
  }
}
