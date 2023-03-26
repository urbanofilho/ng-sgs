import { CadastrarSistemaInformacaoComponent } from './components/sistema-informacao/cadastrar-sistema-informacao/cadastrar-sistema-informacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarSistemaInformacaoComponent } from './components/sistema-informacao/listar-sistema-informacao/listar-sistema-informacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'components/cadastrar-sistema-informacao', pathMatch: 'full' },
  { path: 'components/cadastrar-sistema-informacao', component: CadastrarSistemaInformacaoComponent },
  { path: 'components/listar-sistema-informacao', component: ListarSistemaInformacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
