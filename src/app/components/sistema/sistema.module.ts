import { NgModule } from '@angular/core';

import { SistemaRoutingModule } from './sistema-routing.module';
import { ComumModule } from 'src/app/shared/comum.module';

import { CadastrarSistemaInformacaoComponent } from './sistema-informacao/cadastrar-sistema-informacao/cadastrar-sistema-informacao.component';
import { EditarSistemaInformacaoComponent } from './sistema-informacao/editar-sistema-informacao/editar-sistema-informacao.component';
import { ListarSistemaInformacaoComponent } from './sistema-informacao/listar-sistema-informacao/listar-sistema-informacao.component';

@NgModule({
    declarations: [
        CadastrarSistemaInformacaoComponent,
        EditarSistemaInformacaoComponent,
        ListarSistemaInformacaoComponent
    ],
    imports: [
        ComumModule,
        SistemaRoutingModule
    ]
    })
export class SistemaModule { }