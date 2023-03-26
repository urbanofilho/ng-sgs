import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComumModule } from 'src/app/shared/comum.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarSistemaInformacaoComponent } from './components/sistema-informacao/cadastrar-sistema-informacao/cadastrar-sistema-informacao.component';
import { EditarSistemaInformacaoComponent } from './components/sistema-informacao/editar-sistema-informacao/editar-sistema-informacao.component';
import { ListarSistemaInformacaoComponent } from './components/sistema-informacao/listar-sistema-informacao/listar-sistema-informacao.component';
import { HomeComponent } from './components/home/home.component';
import { SistemaInformacaoService } from './services/sistema-informacao.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarSistemaInformacaoComponent,
    EditarSistemaInformacaoComponent,
    ListarSistemaInformacaoComponent,
    HomeComponent
  ],
  imports: [
    ComumModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SistemaInformacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
