import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  template: `<p>comp4 works!</p>`,
  styles: [`
    p {
      font-size: 4rem;
      font-style: bold;
      font-family: 'Roboto';
      color: red;
      background-color: wheat;
      padding: 5px;
      border: 3px solid red; 
    }
  `]
})
export class Comp4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
