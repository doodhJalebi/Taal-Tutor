import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theka-page',
  templateUrl: './theka-page.component.html',
  styleUrls: ['./theka-page.component.css']
})
export class ThekaPageComponent implements OnInit {

  allThekas: string[] = ['dadra', 'rupak', 'keherwa', 'jhaptal', 'ektal', 'teentaal'];
  // allThekaNames: string[] = ['Dadra', 'Keherwa', 'Rupak', 'Jhaptal', 'Teentaal'];
  thekas: number[] = [...Array(5).keys()];

  thekaOnDisplay: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  updateThekaContent(elem) {
    console.log(elem.id);
    this.thekaOnDisplay = elem.id;
  }
}
