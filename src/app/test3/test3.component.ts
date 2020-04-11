import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test3]',
  template: `
    <p>
      Test 3 with Inline CSS
    </p>
  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
