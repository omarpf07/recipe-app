import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent, RecipeDetailsComponent } from './pages/';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: ':id', component: RecipeDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RecipesRoutingModule { }
