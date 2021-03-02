import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'saldo', component: SaldoComponent },
  { path: 'indicadores', component: IndicadoresComponent },
  { path: 'transferencia', component: TransferenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
