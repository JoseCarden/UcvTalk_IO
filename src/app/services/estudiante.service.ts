import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor( private http: HttpClient) { }

  getEstudiante(){
    return this.http.get('http://localhost:3000/estudiante');
  }

}
