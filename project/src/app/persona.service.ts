import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LogginService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService{
    persons: Persona[] = [
        new Persona('Juan', 'Perez'), 
        new Persona('Laura', 'Suarez'),
        new Persona('Karla', 'Lara')
      ];

      saludar = new EventEmitter<number>();

      constructor(private loggingService: LoggingService){}

      agregarPersona(persona: Persona){
        this.loggingService.enviarMensajeAConsola("Agregamos persona: " + persona.nombre);
        this.persons.push(persona);
      }
}