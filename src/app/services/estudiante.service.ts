import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudianteResponse } from '../interfaces/EstudianteResponse';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor( private http: HttpClient) { }

  getEstudiantes(): Observable<EstudianteResponse[]>{
    return this.http.get<EstudianteResponse[]>
    ('http://localhost:3000/estudiante');
  }

}
