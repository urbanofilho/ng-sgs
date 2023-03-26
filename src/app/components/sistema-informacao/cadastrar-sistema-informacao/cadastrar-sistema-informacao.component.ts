import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-sistema-informacao',
  templateUrl: './cadastrar-sistema-informacao.component.html',
  styleUrls: ['./cadastrar-sistema-informacao.component.css']
})
export class CadastrarSistemaInformacaoComponent implements OnInit {

  @Output() fecharEvent = new EventEmitter(); 

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    this.prepararForm();
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

  limpar(){
    this.form.reset();
    this.form.patchValue({id: 0}); 
  } 

  fechar(){
    this.fecharEvent.emit();
  } 

}

