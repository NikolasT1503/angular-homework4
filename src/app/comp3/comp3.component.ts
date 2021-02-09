import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-comp3',
  templateUrl: './comp3.component.html',
  styles: [`
    .comp3 {
      padding: 1rem;
      border: 2px solid grey;
    }
    p {
      font-size: 1rem;
      font-family: 'Verdana';
    }
    h2 {
      font-size: 3rem;
    }
  `]
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
