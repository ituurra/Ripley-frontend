import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models/indicador';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css'],
})
export class IndicadoresComponent implements OnInit {
  arreglo : Object;
  lista = Indicador[3];
  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.llamarIndicadores();
  }

  llamarIndicadores() {
    this.usuarioService.indicadores().subscribe(
      (res) => {
        this.arreglo = res;
        this.crearLista();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  crearLista() {
   
    this.lista = this.arreglo;
    console.log(this.lista);
  }
}
