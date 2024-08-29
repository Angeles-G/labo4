import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Garcia Angeles Belen ';

  edadUno: number = 0;
  edadDos: number = 0;

  promedio: number = 0;
  suma: number = 0;

  calcularPromedio() {
    return this.promedio = Number(this.calcularSuma()) / 2;
  }
  calcularSuma() {
    return this.suma = Number(this.edadUno) + Number(this.edadDos);
  }
  limpiar() {
    this.suma = 0;
    this.promedio = 0;
    this.edadDos = 0;
    this.edadUno = 0;
  }
}
