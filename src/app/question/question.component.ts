import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import {
  BrowserModule,
  DomSanitizer,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() URL: string;
  @Input() answer: string;
  @Input() options: string[];
  @Output() answerEvent = new EventEmitter<boolean>();

  safeURL: SafeResourceUrl;

  selectedOption: string;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.URL);
    this.selectedOption = this.options[0];
  }

  onSubmit() {
    console.log(this.selectedOption);
    this.answerEvent.emit(this.selectedOption === this.answer ? true : false);
  }

  ngOnChanges() {
    console.log(this.URL);
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.URL);
  }
}
