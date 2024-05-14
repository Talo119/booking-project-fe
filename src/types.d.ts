

export type GenericDataState<T> = {
    data?: T;
    dataState: DataState;
    error?:string;
    expiration?: number;
}