import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SetupTestComponent } from './setup-test/setup-test.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { LearnComponent } from './learn/learn.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpeedTestComponent } from './speed-test/speed-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    SetupTestComponent,
    AddQuestionsComponent,
    AddChapterComponent,
    AddSubjectComponent,
    LearnComponent,
    DashboardComponent,
    SpeedTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
