import { IBaseService } from './i-base.service';
import { TokenService } from './../authentication/token.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, take, catchError } from 'rxjs/operators';

import { ResponseTabela } from './../models/response-tabela.model';
import { Response } from './../models/response.model';
import { environment } from '../../environments/environment'; 
import { BaseModel } from '../models/base.model';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

export abstract class BaseService<T extends BaseModel> implements IBaseService<T> 
{
    token: string;
    urlService: string;
    headers: HttpHeaders;
    
    protected handleError: HandleError;
    responseTabela!: ResponseTabela;    
    response!: Response;
    
    constructor(protected entity: {new(): T;}, protected url: string, protected http: HttpClient, 
                protected tokenService: TokenService, protected httpErrorHandler: HttpErrorHandler) 
    {
        this.token = this.tokenService.retornaToken();
        this.urlService = url;
        this.headers = new HttpHeaders({'Authorization': this.token});
        this.handleError = httpErrorHandler.createHandError(entity.name+'Service');
    }
    
  delete(entity: T) {
    return this.http.delete<T>(environment.API + '/' + this.urlService + '/' + entity.id, {headers: this.headers}).pipe(take(1));
  }
  
  post(entity: T): Observable<Response> {
    return this.http.post<Response>(environment.API + '/' + this.urlService, entity, {headers: this.headers}).pipe(take(1));
  }
  
  put(entity: T): Observable<Response> {    
    return this.http.put<Response>(environment.API + '/' + this.urlService + '/' + entity.id, entity, {headers: this.headers}).pipe(take(1));
  }
  
  get(id: number | string): Observable<Response> {
    return this.http.get<Response>(environment.API + '/' + this.urlService + '/' + id, {headers: this.headers})
    .pipe(catchError(this.handleError('get', this.response)));
  }  
  
  getList(params?: any | null): Observable<ResponseTabela> {
    return this.http.get<ResponseTabela>(environment.API + '/' + this.urlService, {headers: this.headers,
                                                                                        params: params})
    .pipe(catchError(this.handleError('getList', this.responseTabela)));
  }
  
  getListActive(params?: any | null): Observable<ResponseTabela> {
    return this.http.get<ResponseTabela>(environment.API + '/' + this.urlService + '?status=true', {headers: this.headers,
                                                                                        params: params})
    .pipe(catchError(this.handleError('getList', this.responseTabela)));
  }  
  
  uploadFiles(uploadedFiles: any[]): Observable<Response> {

     let formData:FormData = new FormData();
     
     for (let file of uploadedFiles) {
         formData.append('files[]', file, file.name);
     }
     
     return this.http.post<Response>(environment.API + '/upload', formData, {headers: this.headers}).pipe(take(1));
  }                 
    
}
