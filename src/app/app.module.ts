import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { HttpClientModule } from '@angular/common/http';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SaldoComponent,
    TransferenciaComponent,
    IndicadoresComponent,
    BarraNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
