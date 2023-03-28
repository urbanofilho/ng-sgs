import { CadastrarSistemaInformacaoComponent } from './components/sistema/sistema-informacao/cadastrar-sistema-informacao/cadastrar-sistema-informacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'components/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sistema', loadChildren: () => import('./components/sistema/sistema.module').then(m => m.SistemaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
