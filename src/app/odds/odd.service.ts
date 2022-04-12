import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from './category';
import { Odd } from './odd';

@Injectable({
  providedIn: 'root'
})
export class OddService {
  private url = '/odd';

  constructor(public http: HttpClient) { }

  get(id: number): Observable<Odd|null> {
    return this.http.get<Odd>(`${this.url}/${id}`)
      .pipe(
        map((response: any) => {
          if (response && response.data) {
            const odd = new Odd(
              response.data.id,
              response.data.name,
              response.data.number_categorie,
              response.data.logo_odd,
              response.data.color
            );

            odd.categories = response.data.categorie_odd.map(
              (item: any) => new Category(item.id, item.category_number, item.intitule, item.id_odd)
            );

            return odd;
          }

          return null;
        })
      );
  }

  getAll(): Observable<Odd[]> {
    return this.http.get<Odd[]>(this.url)
      .pipe(
        map((response: any) => {
          if (response && response.data) {
            return response.data.map((item: any) => new Odd(
              item.id,
              item.name,
              item.number_categorie,
              item.logo_odd,
              item.color
            ));
          }

          return [];
        })
      )
  }
}
