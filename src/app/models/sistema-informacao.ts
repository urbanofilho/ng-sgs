import { BaseModel } from './base.model';

export class SistemaInformacao extends BaseModel {

    sigla!: string;
    siglaExibicao!: string;
    nome!: string;
    descricao!: string;
    situacao!: number;
}
