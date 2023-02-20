import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListComponent, RecipeDetailsComponent } from './components/pages/';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule { }
