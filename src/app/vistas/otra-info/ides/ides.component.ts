import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ides',
  templateUrl: './ides.component.html',
  styleUrls: ['./ides.component.css']
})
export class IDESComponent implements OnInit {
  ides!: any[]

  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get<any>('../../assets/datos.json').subscribe(data=>{
      this.ides = data.ides
    });
  }
}
