import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { TokenService } from '../authentication/token.service';
import { SistemaInformacao } from '../models/sistema-informacao';
import { environment } from 'src/environments/environment';
import { HttpErrorHandler } from './http-error-handler.service';

@Injectable({
    providedIn: 'root'
  })
  export class SistemaInformacaoService extends BaseService<SistemaInformacao> {

    constructor(protected override http: HttpClient, protected override tokenService: TokenService, protected override httpErrorHandler: HttpErrorHandler) { 
        super(SistemaInformacao, 'sistemainformacao', http, tokenService, httpErrorHandler);
      }

      getSistemaInformacao(params?: any) {
        //return this.http.get<SistemaInformacao>(environment.API + '/' + this.urlService + '/relacao', {headers: this.headers,
        return this.http.get('http://127.0.0.1:8887/sigasi.json');
      } 

  }