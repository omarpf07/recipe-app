import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hit } from '../../model/interfaces';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input()
  hit!: Hit;

  constructor(private router: Router){}

  navigateToRecipeDetails(id: string){
    this.router.navigate([`/recipes/${id}`]);
  }
}
