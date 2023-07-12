import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  laboral!: any[];


  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.http.get<any>('../../assets/datos.json').subscribe(data=>{
      this.laboral = data.laboral
    });
  }
}
