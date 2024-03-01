import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-reloj',
  standalone: true,
  imports: [],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.css'
})
export class RelojComponent {

  hora = signal(0);

  constructor() {
    effect((onCleanup) => {
      const timerInterval = setInterval(() => this.hora.set(1), 10000);
    
      onCleanup(() => {
        clearTimeout(timerInterval);
      });
    });
  }
}
