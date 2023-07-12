import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit{
  tecnologias!: any[]

  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get<any>('../../assets/datos.json').subscribe(data=>{
      this.tecnologias = data.tecnologias
    });
  }
}
