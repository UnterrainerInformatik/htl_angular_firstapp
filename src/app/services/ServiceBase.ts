import { DtoBase } from './dtos/DtoBase'
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export class ServiceBase<T extends DtoBase> {

    protected basePath = 'http://localhost:8080'
    protected path
    protected httpClient: HttpClient

    constructor (httpClient: HttpClient) {
        this.path = this.basePath
        this.httpClient = httpClient
    }

    public getResponse<O>(path: string): Promise<O> {
        return firstValueFrom(this.httpClient.get<O>(path, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: 'body',
            responseType: 'json'
        }))
    }

    public get (id: number): Promise<T> {
        return this.getResponse<T>(this.path + `/${id}`)
    }

    public getList (): Promise<Array<T>> {
        return firstValueFrom(this.httpClient.get<Array<T>>(this.path, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: 'body',
            responseType: 'json'
        }))
    }

    public put (id: number, entity: T): Promise<T> {
        return firstValueFrom(this.httpClient.put<T>(this.path + `/${id}`, entity, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: 'body',
            responseType: 'json'
        }))
    }

    public post (entity: T): Promise<T> {
        return firstValueFrom(this.httpClient.post<T>(this.path, entity, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: 'body',
            responseType: 'json'
        }))
    }

    public delete (id: number): Promise<T> {
        return firstValueFrom(this.httpClient.delete<T>(this.path + `/${id}`, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: 'body',
            responseType: 'json'
        }))
    }
}