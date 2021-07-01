import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/persona.model';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personaServices: PersonaService) {}

  emitirSaludo() {
    this.personaServices.saludar.emit(this.indice);
  }
}
