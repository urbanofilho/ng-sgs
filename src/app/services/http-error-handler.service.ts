import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { MessageService } from 'primeng/api';

export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable({
  providedIn: 'root'
})

export class HttpErrorHandler {
    
    constructor(private messageService: MessageService) { }
    
    createHandError = (serviceName = '') =>
        <T>(operation = 'operation', result = {} as T) =>
        this.handleError(serviceName, operation, result);
        
    handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
        
        return (error: HttpErrorResponse): Observable<T> => {
            console.log(error);
            const message = (error.error instanceof ErrorEvent) ? error.error.message : `server retornou o código ${error.status} com a mensagem "${error.error.message}" no serviço "${serviceName}" e função "${operation}"`;
            
            this.messageService.add({severity:'error', summary: 'Erro', detail: message});
            
            return of( result );
        }
        
    }
}
