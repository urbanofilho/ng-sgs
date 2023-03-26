import { Observable } from 'rxjs';
import { ResponseTabela } from './../models/response-tabela.model';
import { Response } from './../models/response.model';

export interface IBaseService<T> {
    
    delete(entity: T): void;
    
    post(entity: T): Observable<Response>;
    
    put(entiry: T): Observable<Response>;
    
    get(id: number | string): Observable<Response>;
    
    getList(id: number | null, params?: any): Observable<ResponseTabela>;
    
    uploadFiles(uploadedFiles: any[]): Observable<Response>;
}
