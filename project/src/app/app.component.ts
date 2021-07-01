import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Listado de personas';
  titleCalculadora = 'Aplicación de Calculadora';
  resultadoPadre: number;
  persons: Persona[] = [];

  constructor(private personaServices: PersonaService) {}

  ngOnInit(): void {
    this.persons = this.personaServices.persons;
  }

  Proceso(resultado: number) {
    this.resultadoPadre = resultado;
  }
}
