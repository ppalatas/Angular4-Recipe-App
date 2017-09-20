import { Component, OnInit, Input } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

@Input() ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15),
  ];
  constructor() { }

  ngOnInit() {
  }
}
