import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  class: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  tiles: Tile[] = [
    {
      text: 'One',
      cols: 2,
      rows: 2,
      color: 'lightblue',
      class: 'one-tile'
    },
    {
      text: 'Two',
      cols: 1,
      rows: 1,
      color: 'lightgreen',
      class: 'two-tile'
    },
    {
      text: 'Three',
      cols: 1,
      rows: 2,
      color: 'lightpink',
      class: 'three-tile'
    },
    {
      text: 'Four',
      cols: 1,
      rows: 2,
      color: '#DDBDF1',
      class: 'four-tile'
    },
    {
      text: 'five',
      cols: 2,
      rows: 1,
      color: '#DDBAF1',
      class: 'five-tile'
    },
    {
      text: 'six',
      cols: 1,
      rows: 1,
      color: '#DDBDF1',
      class: 'six-tile'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
