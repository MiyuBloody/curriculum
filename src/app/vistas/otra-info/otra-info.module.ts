import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { IDESComponent } from './ides/ides.component';
import { OtrosDatosComponent } from './otros-datos/otros-datos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TecnologiasComponent,
    HerramientasComponent,
    IDESComponent,
    OtrosDatosComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    TecnologiasComponent,
    HerramientasComponent,
    IDESComponent,
    OtrosDatosComponent
  ]
})
export class OtraInfoModule { }
