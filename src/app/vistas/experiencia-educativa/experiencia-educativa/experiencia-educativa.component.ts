import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-experiencia-educativa',
  templateUrl: './experiencia-educativa.component.html',
  styleUrls: ['./experiencia-educativa.component.css']
})
export class ExperienciaEducativaComponent {
  educativa!: any[];

  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get<any>('../../assets/datos.json').subscribe(data=>{
      this.educativa = data.educativa
    });
  }

}
