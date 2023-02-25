import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Hit, RecipeSearchResponse } from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private appId = 'c45d47fe';
  private appKey = '5b091129d4a67d7695bcae91974173ab	';
  private url = 'https://api.edamam.com/api/recipes/v2'

  constructor(private http: HttpClient) { }

  getRecipesByIngredient(ingredient: string) {
    let params = new HttpParams()
      .set('app_id', this.appId)
      .set('app_key', this.appKey)
      .set('type', 'public')
      .set('q', ingredient)
      .set('imageSize', 'THUMBNAIL');

    return this.http.get<RecipeSearchResponse>(this.url, { params }).pipe(map( response => {
      const hitsWithId = response.hits.map(hit => {
        const recipeWithId = {...hit.recipe, id: hit.recipe.uri.split('_')[1]};
        return {...hit, recipe: recipeWithId};
      });
      return {hits: hitsWithId}
    }));
  }

  getRecipeById(id: string){
    let params = new HttpParams()
    .set('app_id', this.appId)
    .set('app_key', this.appKey)
    .set('type', 'public');

  return this.http.get<Hit>(`${this.url}/${id}`, { params });
  }

}
