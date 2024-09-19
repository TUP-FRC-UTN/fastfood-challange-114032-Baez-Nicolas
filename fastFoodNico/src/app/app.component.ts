import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from "./components/pos/pos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastFoodNico';
}
