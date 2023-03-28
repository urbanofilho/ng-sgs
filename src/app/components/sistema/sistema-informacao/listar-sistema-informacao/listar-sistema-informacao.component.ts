import { Component,ViewChild,OnInit} from '@angular/core';
import {LazyLoadEvent, MessageService } from 'primeng/api';

import { SistemaInformacao } from 'src/app/models/sistema-informacao';
import { SistemaInformacaoService } from 'src/app/services/sistema-informacao.service';
import { CadastrarSistemaInformacaoComponent } from '../cadastrar-sistema-informacao/cadastrar-sistema-informacao.component';

@Component({
  selector: 'app-listar-sistema-informacao',
  templateUrl: './listar-sistema-informacao.component.html',
  styleUrls: ['./listar-sistema-informacao.component.css']
})
export class ListarSistemaInformacaoComponent implements OnInit {

  @ViewChild("cadastrarSistemaInformacao") cadastrarSistemaInformacao!: CadastrarSistemaInformacaoComponent;


  //sistemas: SistemaInformacao[] = [];
  //sistema: SistemaInformacao;
  sistemas: any;
  eventLocal!: LazyLoadEvent; 
  itensPorPagina: number = 10;  
  totalRecords!: number;
  first: number = 1;
  rows: number = 10;
  loading: boolean = true;
  formCadastrarSistemaInformacao: boolean = false;      
  btnNovoDisable: boolean = false;

  constructor(
    private service: SistemaInformacaoService, 
    private messageService: MessageService
) { }

ngOnInit(): void {
  this.loading = true;
}

  
  listar(event: LazyLoadEvent | null) {
    this.loading = true;
    if (event) {
        this.eventLocal = event;
        if (this.eventLocal.sortField === undefined) {
            this.eventLocal.sortField = 'id';
            this.eventLocal.sortOrder = -1;
        }
    }  
    this.service.getSistemaInformacao({ searchEventPrimeNG:JSON.stringify(this.eventLocal)})
    .subscribe((responseTabela:any) => {
      console.log("TABELA AQUI"+responseTabela.data);
                      this.sistemas = responseTabela.data.list;
                      this.first = responseTabela.data.page;
                      this.totalRecords = responseTabela.data.total;
                      this.itensPorPagina = responseTabela.data.itemsPerPage;
                      this.loading = false;
                  },
                  error => { console.log(error);
                            this.messageService.add({severity:'error', summary: 'Erro', detail: error.error.detail, life: 15000}); 
                }   
      );
  }

  novoSistemaInformacao() {
    this.formCadastrarSistemaInformacao = true;
    this.cadastrarSistemaInformacao.limpar();
  }

  fecharFormCadastrarSistemaInformacao(){
    this.formCadastrarSistemaInformacao = false; 
    this.listar(null);
}     


  editar(SistemaInformacao: SistemaInformacao){

  }

  apagar(SistemaInformacao: SistemaInformacao){

  }

}
