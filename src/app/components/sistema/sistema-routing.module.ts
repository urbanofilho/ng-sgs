import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarSistemaInformacaoComponent } from './sistema-informacao/cadastrar-sistema-informacao/cadastrar-sistema-informacao.component';
import { EditarSistemaInformacaoComponent } from './sistema-informacao/editar-sistema-informacao/editar-sistema-informacao.component';
import { ListarSistemaInformacaoComponent } from './sistema-informacao/listar-sistema-informacao/listar-sistema-informacao.component';

const sistemaRoutes: Routes = [
  { path: 'listar-sistema-informacao', component: ListarSistemaInformacaoComponent },
  { path: 'cadastrar-sistema-informacao', component: CadastrarSistemaInformacaoComponent },
  { path: 'editar-sistema-informacao/:id', component: EditarSistemaInformacaoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(sistemaRoutes)],
    exports: [RouterModule]
  })
  export class SistemaRoutingModule { }