export interface ResponseTabela {
    sucess: boolean;
    status: number;
    message: string;
    data: Data;
}

export interface Data {
    page: number;
    itemsPerPage: number;
    total: number;
    list: any[];
}