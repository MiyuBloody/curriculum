import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaEducativaComponent } from './experiencia-educativa/experiencia-educativa.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ExperienciaEducativaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[ExperienciaEducativaComponent]
})
export class ExperienciaEducativaModule { }
