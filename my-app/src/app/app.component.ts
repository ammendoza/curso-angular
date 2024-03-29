import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { CounterComponent } from './counter/counter.component';
import { RelojComponent } from './reloj/reloj.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridComponent, CounterComponent, RelojComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Ana Mendoza';
  elements = [1,2,3,4,5,6];

  miFuncionClick(ev:Event) {
    console.log('Se ha hecho click');
  }

}


