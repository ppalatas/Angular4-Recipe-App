import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/560x315/1073048.jpg'),
    new Recipe('Test recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/560x315/1073048.jpg'),
    new Recipe('Test recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/560x315/1073048.jpg')
    // this is where the 3 arguments from recipe.model.ts info comes into play. 
    // i.e. name, recipe, imagepath
  ];
  constructor() { }

  ngOnInit() {
  }

}
