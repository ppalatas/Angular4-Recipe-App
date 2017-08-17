import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredients = [];
  ingredient = '';

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    // this.ingredient(<InnerHTMLInput>this.ingredient)
    this.ingredients.push
  }
}
