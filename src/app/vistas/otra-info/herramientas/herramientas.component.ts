import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent {
  herramientas!: any[]

  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get<any>('../../assets/datos.json').subscribe(data=>{
      this.herramientas = data.herramientas
    });
  }
}
