import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  constructor(
    private router: Router,
    private usuarioServices: UsuariosService
  ) {}

  ngOnInit(): void {
  }

  ir(palabra: String) {
    this.router.navigate([`./${palabra}`]);
  }
}
