import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Hit } from '../../model/interfaces';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  public hits: Hit[] = [];

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
    this.getRecipesByIngredient('chicken');
  }

  getRecipesByIngredient(ingredient: string) {
    this.recipesService.getRecipesByIngredient(ingredient).pipe(takeUntil(this.destroy$)).subscribe(recipes => {
      this.hits = recipes.hits;
      console.log(this.hits);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
