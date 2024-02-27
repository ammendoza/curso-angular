import { Component } from '@angular/core';
import { DayComponent } from '../day/day.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})

export class GridComponent {
  days = [...getMonthDays()];

  handlerDay(day:number){
    console.log(day)
  }
}

function* getMonthDays() {
  let array = new Array();
  for (let i=0; i<31; i++) {
    yield i+1
  }
}
