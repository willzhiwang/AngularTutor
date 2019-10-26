import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/food.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  food1 = '';
  food2 = '';
  recipe = '';
  constructor() { }
  hello = '';

  foods: Food[] = [
    new Food('Beef', 'Tomato', '西红柿炖牛肉'),
    new Food('Beef', 'Potato', '土豆烧牛肉'),
    new Food('Beef', 'Carrort', '牛肉炒胡萝卜'),
    new Food('Pork', 'cabbage', '猪肉炖白菜'),
    new Food('Pork', 'Potato', '土豆排骨'),
    new Food('Pork', 'Tomato', '西红柿排骨'),
    new Food('Chicken', 'Carrort', '鸡肉胡萝卜'),
    new Food('Chicken', 'Potato', '鸡肉土豆'),
    new Food('Eggs', 'Tomato', '西红柿鸡蛋'),
  ];

  ngOnInit() {
  }
  add1($event: Event) {
    this.food1 = (<HTMLButtonElement>event.target).value;
    this.findfood(this.food1, this.food2);
  }
  add2($event: Event) {
    this.food2 = (<HTMLButtonElement>event.target).value;
    this.findfood(this.food1, this.food2);
  }
  findfood(food1, food2) {
    console.log(food1, food2);
    if (this.food1 === '' || this.food2 === '')
    {
      //console.log("null in food 1 or 2");
      this.recipe = "Choose the second food to check recipe";
    }
    if (this.food1 !== '' && this.food2 !== '')
    {
      for (let f of this.foods) {
        this.recipe = "黑暗料理!";
        if (food1 === f.food1 && food2 === f.food2) {
          this.recipe = f.recept;
          break;
        }
      }
    }
  }
}
