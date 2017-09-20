import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/560x315/1073048.jpg'),
    new Recipe('Test recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/560x315/1073048.jpg'),
    new Recipe('Test recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/560x315/1073048.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('recipe was clicked');
    this.recipeWasSelected.emit(recipe);
  }

}
