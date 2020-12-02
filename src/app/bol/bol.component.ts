import { Component, Input, OnInit } from '@angular/core';
import { sounds } from '../../assets/sounds/paths';

@Component({
  selector: 'app-bol',
  templateUrl: './bol.component.html',
  styleUrls: ['./bol.component.css'],
})
export class BolComponent implements OnInit {
  @Input() name: string;
  @Input() number: number;
  sound = null;

  constructor() {}

  ngOnInit(): void {
    switch (this.name) {
      case 'dha':
        this.sound = new Audio(sounds.dha);
        break;
      case 'dhin':
        this.sound = new Audio(sounds.dhin);
        break;
      case 'na':
        this.sound = new Audio(sounds.na);
        break;
      case 'tin':
        this.sound = new Audio(sounds.tin);
        break;
      case 'tirkit':
        this.sound = new Audio(sounds.tirkit);
        break;
      case 'tite':
        this.sound = new Audio(sounds.tite);
        break;

      default:
        console.log("Error. Invalid bol name.");
        break;
    }
  }

  play() {
    this.sound.play();
  }
}
