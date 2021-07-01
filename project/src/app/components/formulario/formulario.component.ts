import { Component } from '@angular/core';
import { LoggingService } from 'src/app/LogginService.service';
import { Persona } from 'src/app/persona.model';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  constructor(
    private loggingService: LoggingService,
    private personaService: PersonaService
  ) {
    this.personaService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }

  nombreImput: string = '';
  apellidoImput: string = '';

  agregarPersona() {
    let persona1 = new Persona(this.nombreImput, this.apellidoImput);
    this.personaService.agregarPersona(persona1);
  }
}
