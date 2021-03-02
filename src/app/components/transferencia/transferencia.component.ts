import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css'],
})
export class TransferenciaComponent implements OnInit {
  cuentaDestino: String = '';
  cuentaOrigen: String = '';
  monto: number;
  textError: String = '';
  expression = 'none';
  message: any;

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {}

  hacerTransferencia() {
    if (
      this.cuentaDestino === '' ||
      this.cuentaOrigen === '' ||
      this.monto === undefined
    ) {
      this.textError = 'campos incompletos';
      return;
    }

    this.usuarioService
      .transferencia(
        this.cuentaOrigen.trim(),
        this.cuentaDestino.trim(),
        this.monto
      )
      .subscribe(
        (res) => {
          this.message = res;
          this.monto = 0;
           this.expression = '';
          this.generarPdf();
        },
        (err) => {}
      );
  }
  generarPdf() {
    const doc = new jsPDF();
    doc.text(`Transaccion desde ${this.cuentaOrigen} a ${this.cuentaDestino} por un monto de ${this.monto} se realizo correctamente`, 10, 10);

    doc.save('comprobante.pdf');

  }
}
