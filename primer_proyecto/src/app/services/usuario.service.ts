import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    url = 'http://localhost:4000/api/'

  constructor(private http:HttpClient ) {}

    getUsuario (): Observable <any> {
    return this.http.get(`${this.url}/usuario`)
  }

  deleteUsuario(id:string): Observable<any>{
    return this.http.delete(`${this.url}/eliminar-usuario/${id}`)
  }

  postUsuario(usuario:Usuario) : Observable<any>{
        return this.http.post(`${this.url}/crear-usuario`, usuario)
    }

    getUsuarios(id: string): Observable<any>{
      return this.http.get(`${this.url}/usuarios/${id}`)
    }

    putUsuarios(id: string, usuario:Usuario ): Observable<any>{
      return this.http.put(`${this.url}/actualizar-usuario/${id}`, usuario)
    }

  }


