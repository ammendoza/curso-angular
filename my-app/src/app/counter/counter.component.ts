import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count = signal(0);

  handleClick(ev:Event) {
    this.count.update(value => value + 1);
    console.log(this.count());
  }
}
