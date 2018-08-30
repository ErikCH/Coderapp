import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 2, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'five', cols: 2, rows: 1, color: '#DDBAF1' },
    { text: 'six', cols: 1, rows: 1, color: '#DDBDF1' }
  ];
  constructor() {}

  ngOnInit() {}
}
