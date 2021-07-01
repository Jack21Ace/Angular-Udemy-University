import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-calculadora',
  templateUrl: './formulario-calculadora.component.html',
  styleUrls: ['./formulario-calculadora.component.css'],
})
export class FormularioCalculadoraComponent {
  numero1: number;
  numero2: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar(): void {
    let resultado = this.numero1 + this.numero2;
    this.resultadoSuma.emit(resultado);
  }
}
