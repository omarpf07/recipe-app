import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeSearchResponse } from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  appId = 'c45d47fe';
  appKey = '5b091129d4a67d7695bcae91974173ab	';
  constructor(private http: HttpClient) { }

    getRecipesByIngredient(ingredient: string) {
    let params = new HttpParams()
      .set('app_id', this.appId)
      .set('app_key', this.appKey)
      .set('q', ingredient)
      .set('imageSize', 'THUMBNAIL');

    return this.http.get<RecipeSearchResponse>('https://api.edamam.com/search', { params });
  }
}
