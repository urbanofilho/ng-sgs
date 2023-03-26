import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNGModule } from './prime-ng.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpClientModule,
    PrimeNGModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpClientModule,
    PrimeNGModule,
  ],
})
export class ComumModule { }
