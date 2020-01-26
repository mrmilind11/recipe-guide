import { DishModel } from './../../../../models/dishes/dish.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-edit-dish',
  templateUrl: './add-edit-dish.component.html',
  styleUrls: ['./add-edit-dish.component.scss']
})
export class AddEditDishComponent implements OnInit {
  /******************************** Constructor ******************************/
  constructor() { }
  /******************************** Properties *******************************/
  private defaultDish: DishModel = {
    '_id': '', 'name': '',
    'description': '', 'difficulty': null,
    'imageUrl': '', 'ingredientsList': [],
    'steps': [], 'time': null,
    'timeUnit': 'MIN', 'vegType': 'VEG',
    'categories': []
  }
  private defaultStep = { name: '', quantity: '' };
  public dishData: DishModel;
  /******************************** Methods **********************************/
  ngOnInit() {
  }

}
