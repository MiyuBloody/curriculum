import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educativa } from 'src/app/interfaces/educativa.model';
@Component({
  selector: 'app-experiencia-educativa',
  templateUrl: './experiencia-educativa.component.html',
  styleUrls: ['./experiencia-educativa.component.css']
})
export class ExperienciaEducativaComponent {
  educativa!: any[];
  _educativa: Educativa[] = []
  eduId: number = 0;

  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get<any>('../../assets/datos.json').subscribe(data=>{
      this.educativa = data.educativa
    });
  }

  detalleEducacion(exEducativa: any){
    this.eduId = exEducativa;
  }

}
