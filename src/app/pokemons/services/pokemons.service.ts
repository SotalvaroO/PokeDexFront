import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { QueryParam } from 'src/app/data-repository/data.repository';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private url: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getPokemons(queries: QueryParam[]){
    const finalUrl: string = this.appendToUrl(this.url, queries);
    this.http.get(finalUrl);
  }

  private appendToUrl(url: string, queries: QueryParam[]) {
    queries.forEach((query) => {
      url.concat(`?${query.query}=${query.value}`);
    });
    return url;
  }
}
