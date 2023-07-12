import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ExperienciaLaboralComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ExperienciaLaboralComponent
  ]
})
export class ExperienciaLaboralModule { }
