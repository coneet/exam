import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name: any;
  public answers: any;
  public dispaly: boolean;
  public result: any;
  public view_solution: boolean;
  public view_end_answer: boolean;
  public current_url: string;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.dispaly = true;
    this.view_solution = false;
    this.view_end_answer = false;
    this.getQuestions(1);
    this.current_url = this.router.url;
  }

  selectRadioButton(element) {
    element.children[0].click();
  }


  checkAnswers() {
    var result_set = {
      total_questions: Object.keys(this.name).length,
      answered: parseInt('0', 10),
      unaswered: parseInt('0', 10),
      correct: parseInt('0', 10),
      incorrect: parseInt('0', 10)
    }

    this.name.forEach(function (value) {
      if (value["response"] !== undefined) {
        result_set.answered++;
        if (value["response"] === value["answer"]) {
          result_set.correct++;
        } else {
          result_set.incorrect++;
        }
      } else {
        result_set.unaswered++;
      }
    });
    this.result = result_set;
    this.dispaly = false;
  }

  storeAnswer(index, response) {
    this.name[index]["response"] = response;
  };

  pickRandom() {
    for (var key in this.name) {
      var items = [];
      var list = this.name[key].choices;
      while (list.length > 0) {
        var index = Math.floor(Math.random() * list.length);
        items.push(list[index]);
        list.splice(index, 1);
      };
      this.name[key].choices = items;
      this['response'] = false;
    }
  }

  ngOnInit() {
    //console.log(this.route.snapshot.queryParams['total_questions']);
    //console.log(this.route.snapshot.queryParams['chapter_id'])
    console.log(Component);
  }

  getQuestions(subject_id) {
    let chapter_id = this.route.snapshot.queryParams['chapter_id'];
    let total_question = this.route.snapshot.queryParams['total_questions'];
    let start_from = this.route.snapshot.queryParams['start_from'];
    let sub_chapter = this.route.snapshot.queryParams['sub_chapter'];
    let is_hard = this.route.snapshot.queryParams['is_hard'];
    this.http.get('/api/apps.php?get=questions&chapter_id=' + chapter_id + '&total_question=' + total_question + '&start_from=' + start_from + '&sub_chapter=' + sub_chapter + '&is_hard=' + is_hard).subscribe((res) => {
      for (var x in res) {
        res[x].choices = res[x].choices.split('||');
      }
      this.name = res;

      this.pickRandom();
    });
  }

}
