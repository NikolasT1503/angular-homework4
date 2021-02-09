import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-comp2',
  template: `<p>comp2 template works!</p> `,
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
