import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesModule } from './vistas/datos-personales/datos-personales.module';
import { ExperienciaEducativaModule } from './vistas/experiencia-educativa/experiencia-educativa.module';
import { ExperienciaLaboralModule } from './vistas/experiencia-laboral/experiencia-laboral.module';
import { OtraInfoModule } from './vistas/otra-info/otra-info.module';
import { NavTopModule } from './vistas/nav-top/nav-top.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './vistas/home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatosPersonalesModule,
    ExperienciaEducativaModule,
    ExperienciaLaboralModule,
    OtraInfoModule,
    NavTopModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
