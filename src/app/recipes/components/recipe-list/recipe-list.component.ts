import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Hit } from '../../model/interfaces';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public hits: Hit[] = [];

  constructor(private recipesService: RecipeService) { }
 
  ngOnInit(){
    this.getRecipesByIngredient('pizza')
  }

  getRecipesByIngredient(ingredient: string){
    this.recipesService.getRecipesByIngredient(ingredient).subscribe(recipes => {
      this.hits = recipes.hits;
      console.log(this.hits);
    })
  }
}
