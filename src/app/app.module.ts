import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BolComponent } from './bol/bol.component';
import { ThekaComponent } from './theka/theka.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ThekaPageComponent } from './theka-page/theka-page.component';
import { ThekaPlayerComponent } from './theka-player/theka-player.component';
import { IdentifyComponent } from './identify/identify.component';

@NgModule({
  declarations: [
    AppComponent,
    BolComponent,
    ThekaComponent,
    NavbarComponent,
    QuestionComponent,
    QuizComponent,
    ProgressbarComponent,
    ThekaPageComponent,
    ThekaPlayerComponent,
    IdentifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
