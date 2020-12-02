import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoSAFinalApp';
  theka_name = "teentaal";
  currentlyShow: number = 0; // Homepage - 0, Learn Taals - 1, Test Knowledge - 2

  onClickLearn() {
    console.log(`onClickLearn`);
    this.currentlyShow = 1;
  }
  
  onClickTest() {
    console.log(`onClickTest`);
    this.currentlyShow = 2;
  }

  onBack() {
    console.log(`onBack`);
    this.currentlyShow = 0;
  }
}
