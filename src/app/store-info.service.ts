import { Injectable } from '@angular/core';
import { Tile } from './models/tile';


@Injectable({
  providedIn: 'root'
})
export class StoreInfoService {
  hi= 'hello world';
  tiles: Tile[] = [
    {
      text: 'Pants',
      cols: 2,
      rows: 2,
      color: 'lightblue',
      class: 'one-tile',
      id: 1
    },
    {
      text: 'Shirt',
      cols: 1,
      rows: 1,
      color: 'lightgreen',
      class: 'two-tile',
      id: 2
    },
    {
      text: 'Shoes',
      cols: 1,
      rows: 2,
      color: 'lightpink',
      class: 'three-tile',
      id: 3
    },
    {
      text: 'Socks',
      cols: 1,
      rows: 2,
      color: '#DDBDF1',
      class: 'four-tile',
      id: 4
    },
    {
      text: 'Watch',
      cols: 2,
      rows: 1,
      color: '#DDBAF1',
      class: 'five-tile',
      id: 5
    },
    {
      text: 'Dress shirt',
      cols: 1,
      rows: 1,
      color: '#DDBDF1',
      class: 'six-tile',
      id: 6
    }
  ];

  constructor() { }
}
