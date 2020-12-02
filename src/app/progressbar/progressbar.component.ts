import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input() totalQuestions: number;
  @Input() currentProgress: number;
  
  questions: number[];

  constructor() { }

  ngOnInit(): void {
    this.questions = [...Array(this.totalQuestions).keys()];
  }

  getColor(step) {
    if (step.id <= this.currentProgress) {
      return "#CBA135"
    }
    return "white";
  }

  check() {

  }

}
