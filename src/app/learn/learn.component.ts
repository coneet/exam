import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  public name: any;
  public display_ansers: number = 1;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.getQuestions();
  }

  ngOnInit() {
  }

  getQuestions() {
    let chapter_id = this.route.snapshot.queryParams['chapter_id'];
    let total_question = this.route.snapshot.queryParams['total_questions'];
    let start_from = this.route.snapshot.queryParams['start_from'];
    let sub_chapter = this.route.snapshot.queryParams['sub_chapter'];
    let is_hard = this.route.snapshot.queryParams['is_hard'];
    this.http.get('/api/apps.php?get=questions&chapter_id=' + chapter_id + '&total_question=' + total_question + '&start_from=' + start_from + '&sub_chapter=' + sub_chapter + '&is_hard=' + is_hard).subscribe((res) => {
      this.name = res;
    });
  }

  testNow() {
    let params = {
      queryParams: {
        chapter_id: this.route.snapshot.queryParams['chapter_id'],
        total_questions: this.route.snapshot.queryParams['total_questions'],
        start_from: this.route.snapshot.queryParams['start_from'],
        sub_chapter: this.route.snapshot.queryParams['sub_chapter']
      }
    };
    this.router.navigate(['/test'], params);
  }

  updateStatus(question_id, status, index) {
    this.name[index].is_hard = status;
    this.http.get('/api/apps.php?get=hardStatus&question_id=' + question_id + '&status=' + status).subscribe((res) => {
      //this.name[] = res;
    });
  }
}
