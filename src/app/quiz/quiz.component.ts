import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  videoURLs: string[] = [
    'https://www.youtube.com/embed/ZtOQ49_hO8s',
    'https://www.youtube.com/embed/ed4SIvGjqNI',
    'https://www.youtube.com/embed/Mshi-7hfKJM',
    'https://www.youtube.com/embed/lpNAOiJmS2c',
    'https://www.youtube.com/embed/KB7aZ8RYTD4',
    'https://www.youtube.com/embed/eUY1uKlGO6E',
    'https://www.youtube.com/embed/NM7Qm3zV_8Q',
    'https://www.youtube.com/embed/oACbmNkih0I',
    'https://www.youtube.com/embed/uEqYzdz3Zvg',
    'https://www.youtube.com/embed/9EljixrFh04',
    'https://www.youtube.com/embed/R0yoXTyH8Jo',
  ];
  correctAnswers: string[] = [
    'keherwa',
    'teentaal',
    'teentaal',
    'keherwa',
    'rupak',
    'dadra',
    'jhaptal',
    'teentaal',
    'teentaal',
    'dadra',
    'dadra',
  ];

  allTaals: string[] = ['dadra', 'keherwa', 'rupak', 'jhaptal', 'teentaal'];

  totalQuestions: number = 5;
  questionIndices: number[] = [];
  
  currentURL: string;
  currentOptions: string[];
  currentAnswer: string;

  questionIndex: number;
  score: number;
  remarks: string;

  hasStarted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    /* Initialize quiz by generating totalQuestions number of 
    random indices corresponding to a question in videURLs. */
    while (this.questionIndices.length != this.totalQuestions) {
      var index = Math.floor(Math.random() * 11);
      if (!this.questionIndices.includes(index)) {
        this.questionIndices.push(index);
      }
    }
    this.questionIndex = 0;
    this.score = 0;
    this.beginQuiz();
  }

  beginQuiz() {
    console.log("Starting quiz...");
    this.hasStarted = true;
    this.updateQuestion();
  }

  updateQuestion() {
    // Assign correct URL and answer
    this.currentURL = this.videoURLs[this.questionIndices[this.questionIndex]];
    this.currentAnswer = this.correctAnswers[this.questionIndices[this.questionIndex]];

    // Generate options and include correct answer
    this.currentOptions = [this.currentAnswer];
    while (this.currentOptions.length !== 4) {
      var index = Math.floor(Math.random() * 5);
      if (!this.currentOptions.includes(this.allTaals[index])) {
        this.currentOptions.push(this.allTaals[index]);
      }
    }

    // Shuffle options
    this.currentOptions = this.shuffle(this.currentOptions);
    console.log("Question updated!");
    console.log(`New URL is ${this.currentURL}`);
  }

  nextQuestion() {
    console.log("Incrementing questionIndex and updating question...");
    console.log(`Old questionIndex is ${this.questionIndex}`);
    this.questionIndex++;
    this.updateQuestion();
    console.log(`New questionIndex is ${this.questionIndex}`);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  onAnswer(value) {
    console.log(value);
    if (value) {
      this.score++;
    }
    if (this.questionIndex !== this.totalQuestions - 1) {
      this.nextQuestion();
    } else {
      this.endQuiz();
    }
  }

  endQuiz() {
    this.hasStarted = false;
    this.questionIndex++;
    var percentage = this.score / this.totalQuestions * 100;
    if (percentage === 0) {
      this.remarks =  "That sucks 😟";
    }
    else if (percentage > 0 && percentage <= 35) {
      this.remarks =  "Better luck next time 😕";
    }
    else if (percentage > 35 && percentage <= 50) {
      this.remarks =  "Pretty Good! 😀";
    }
    else if (percentage > 50 && percentage <= 75) {
      this.remarks =  "Nice work! 😄";
    }
    else if (percentage > 75 && percentage <= 100) {
      this.remarks =  "Awesome score! ⚡💪";
    }
  }
}
