import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListComponent, RecipeDetailsComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';


@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule { }
