import { JsonpClientBackend } from '@angular/common/http';
import { isNgTemplate, NONE_TYPE } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css'],
})
export class SaldoComponent implements OnInit {
  textError: String;
  rut: String;
  expression = 'none';
  message: any;
  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.textError = '';
  }

  consultarSaldo() {
    console.log(this.rut);
    if (this.rut === undefined) {
      this.textError = 'no puede enviar vacio';
      return;
    }
    if (this.rut === '') {
      this.textError = 'no puede enviar vacio';
      return;
    }

    this.usuarioService.saldo(this.rut.trim()).subscribe(
      (res) => {
        this.message = res;
        this.textError = '';
        this.expression = '';
      },
      (err) => {
        this.message = 'Rut no encontrado!';
      }
    );
  }
}
