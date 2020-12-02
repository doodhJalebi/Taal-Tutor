import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { sounds } from "../../assets/sounds/paths";

@Component({
  selector: 'app-theka-player',
  templateUrl: './theka-player.component.html',
  styleUrls: ['./theka-player.component.css']
})
export class ThekaPlayerComponent implements OnInit, OnDestroy {

  @Input() theka_name: string;
  sound = null;

  constructor() { }

  ngOnInit(): void {
    switch (this.theka_name) {
      case 'dadra':
        this.sound = new Audio(sounds.dadra);
        break;
      case 'rupak':
        this.sound = new Audio(sounds.rupak);
        break;
      case 'keherwa':
        this.sound = new Audio(sounds.keherwa);
        break;
      case 'jhaptal':
        this.sound = new Audio(sounds.jhaptal);
        break;
      case 'teentaal':
        this.sound = new Audio(sounds.teentaal);
        break;
      default:
        console.log("Error. Invalid theka name!");
        break;
    }
  }

  ngOnDestroy() {
    this.sound.pause();
    this.sound.currentTime = 0;
  }

  play() {
    this.sound.play();
  }

}
