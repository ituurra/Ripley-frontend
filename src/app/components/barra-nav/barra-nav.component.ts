import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css'],
})
export class BarraNavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  ir(palabra: String) {
    this.router.navigate([`./${palabra}`]);
  }
}
