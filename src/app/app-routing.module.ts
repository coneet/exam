import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { LearnComponent } from './learn/learn.component';
import { SetupTestComponent } from './setup-test/setup-test.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpeedTestComponent } from './speed-test/speed-test.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'setup-test', component: SetupTestComponent },
  { path: 'add-questions', component: AddQuestionsComponent },
  { path: 'add-chapter', component: AddChapterComponent },
  { path: 'add-subject', component: AddSubjectComponent },
  { path: 'st-history', component: SpeedTestComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
