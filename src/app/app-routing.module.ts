import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosPersonalesComponent } from './vistas/datos-personales/datos-personales/datos-personales.component';
import { ExperienciaEducativaComponent } from './vistas/experiencia-educativa/experiencia-educativa/experiencia-educativa.component';
import { ExperienciaLaboralComponent } from './vistas/experiencia-laboral/experiencia-laboral/experiencia-laboral.component';
import { HerramientasComponent } from './vistas/otra-info/herramientas/herramientas.component';
import { IDESComponent } from './vistas/otra-info/ides/ides.component';
import { TecnologiasComponent } from './vistas/otra-info/tecnologias/tecnologias.component';
import { OtrosDatosComponent } from './vistas/otra-info/otros-datos/otros-datos.component';
import { HomeComponent } from './vistas/home/home/home.component';

const routes: Routes = [
  { path:'', component : HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'datos', component : DatosPersonalesComponent },
  { path:'educacion', component : ExperienciaEducativaComponent },
  { path:'laboral', component : ExperienciaLaboralComponent },
  { path:'herramientas', component : HerramientasComponent },
  { path:'ides', component : IDESComponent },
  { path:'tecnologias', component : TecnologiasComponent },
  { path:'otros', component : OtrosDatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
