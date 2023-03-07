import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface QueryParam {
  query: string;
  value: string;
}

export abstract class DataRepository<T, ID> {
  public abstract getAll(
    serviceName: string,
    queries: QueryParam[]
  ): Observable<T[]>;

  public abstract getById(serviceName: string, id: ID): Observable<T>;
}

@Injectable({
  providedIn: 'root',
})
export class GenericDataRepository<T, ID> implements DataRepository<T, ID> {
  private url: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getById(serviceName: string, id: ID): Observable<T> {
    return this.http.get<T>(`${this.url}/${serviceName}/${id}`);
  }

  public getAll(serviceName: string, queries: QueryParam[]): Observable<T[]> {
    const finalUrl: string = this.appendToUrl(this.url, queries);
    return queries
      ? this.http.get<T[]>(finalUrl)
      : this.http.get<T[]>(`${this.url}/${serviceName}`);
  }

  private appendToUrl(url: string, queries: QueryParam[]) {
    queries.forEach((query) => {
      url.concat(`?${query.query}=${query.value}`);
    });
    return url;
  }
}
