import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioCalculadoraComponent } from './components/formulario-calculadora/formulario-calculadora.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { LoggingService } from './LogginService.service';
import { PersonaService } from './persona.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    FormularioComponent,
    FormularioCalculadoraComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggingService,
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
