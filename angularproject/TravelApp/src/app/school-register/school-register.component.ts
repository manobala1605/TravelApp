import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-register',
  templateUrl: './school-register.component.html',
  styleUrls: ['./school-register.component.css']
})
export class SchoolRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class TabGroupAlignExample {}

export class SliderFormattingExample {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
