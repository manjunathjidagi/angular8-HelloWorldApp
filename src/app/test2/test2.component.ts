import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test2',
  template: `
    <p>Test2 Inline Template</p>
  `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
