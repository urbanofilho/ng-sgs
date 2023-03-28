import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SistemaInformacao } from 'src/app/models/sistema-informacao';

@Component({
  selector: 'app-cadastrar-sistema-informacao',
  templateUrl: './cadastrar-sistema-informacao.component.html',
  styleUrls: ['./cadastrar-sistema-informacao.component.css']
})
export class CadastrarSistemaInformacaoComponent implements OnInit {

  @Input() sistemaInformacao!: SistemaInformacao;

  @Output() fecharEvent = new EventEmitter(); 

  edit: boolean = false;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    this.prepararForm();
    if (!!this.sistemaInformacao) {
      this.atualizaForm(this.sistemaInformacao);          
    } 
  }

  prepararForm() {
    this.form = this.formBuilder.group({
          id: [0],
          sigla: [null, [Validators.required]],
          siglaexibicao: [null, [Validators.required]],
          nome: [null, [Validators.required]],
          descricao: [null, [Validators.required]],
          situacao: [null, [Validators.required]]
    });
  }
  
  atualizaForm(sistemaInformacao: SistemaInformacao) {
    this.edit = true;
  }  

  limpar(){
    this.form.reset();
    this.form.patchValue({id: 0}); 
  } 

  fechar(){
    this.fecharEvent.emit();
  } 

}

