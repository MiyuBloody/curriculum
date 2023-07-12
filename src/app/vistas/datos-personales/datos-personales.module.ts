import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';



@NgModule({
  declarations: [
    DatosPersonalesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DatosPersonalesComponent]
})
export class DatosPersonalesModule { }
