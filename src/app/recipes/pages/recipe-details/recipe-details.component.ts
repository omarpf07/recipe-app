import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../model/interfaces/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public recipe!: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.recipeService.getRecipeById(params['id']))
      , takeUntil(this.destroy$)).subscribe(hit => {
        this.recipe = hit.recipe;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
