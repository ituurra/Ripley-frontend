import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  transferencia(cuentaOrigen: String,cuentaDestino: String , monto : number){
    return this.http.post(`${this.API_URI}/transferencia`,{cuentaOrigen,cuentaDestino,monto});
    
  }
  saldo(rut: String){
    return this.http.post(`${this.API_URI}/consultarSaldo`,{rut});
    
  }

  indicadores(){
    return this.http.post(`${this.API_URI}/indicadores`,{valores : ["dolar","uf","utm"]});
    
  }
}
