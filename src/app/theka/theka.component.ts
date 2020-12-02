import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-theka',
  templateUrl: './theka.component.html',
  styleUrls: ['./theka.component.css']
})
export class ThekaComponent implements OnInit {

  @Input() theka_name: string;
  bols: string[] = [];

  constructor() { }

  ngOnInit(): void {
    switch (this.theka_name) {
      case "teentaal":
        this.bols = [
          "dha", "dhin", "dhin", "dha", 
          "dha", "dhin", "dhin", "dha", 
          "dha", "tin", "tin", "na",
          "na", "dhin", "dhin", "dha"]
        break;

      case "keherwa":
        this.bols = [
          "dha", "dha", "tin", "tin", 
          "na", "na", "dhin", "dhin"]
        break;

      case "dadra":
        this.bols = [
          "dha", "tin", "tin", 
          "na", "dhin", "dhin"]
        break;

      case "jhaptal":
        this.bols = [
          "dhin", "na", "dhin", "dhin", "na", 
          "tin", "na", "dhin", "dhin", "na"]
        break;

      case "rupak":
        this.bols = ["tin", "tin", "na", "dhin", "na", "dhin", "na"]
        break;
    
      default:
        console.log("Error. Invalid theka name.");
        break;
    }
  }

}
