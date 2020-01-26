import { DishDatabaseService } from './../../../shared/services/dish-database.service';
import { DishModel } from './../../../../models/dishes/dish.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import _ from 'lodash';
@Component({
  selector: 'add-edit-dish',
  templateUrl: './add-edit-dish.component.html',
  styleUrls: ['./add-edit-dish.component.scss'],
  host: {
    class: 'mat-app-background flex flex-column'
  }
})
export class AddEditDishComponent implements OnInit {
  /******************************** Constructor ******************************/
  constructor(
    private activatedRoute: ActivatedRoute,
    private dishDatabaseService: DishDatabaseService,
    private router: Router
  ) { }
  /******************************** Properties *******************************/
  private defaultDish: DishModel = {
    '_id': '', 'name': '',
    'description': '', 'difficulty': null,
    'imageUrl': '', 'ingredientsList': [],
    'steps': [], 'time': null,
    'timeUnit': null, 'vegType': null,
    'categories': []
  }
  private ingredient = { name: '', quantity: '' };
  public dishData: DishModel;
  private dishId: string;
  /******************************** Methods **********************************/
  ngOnInit() {
    this.dishId = this.activatedRoute.snapshot.params.id;
    this.initializeData();
  }

  private initializeData() {
    if (this.dishId) {
      this.dishDatabaseService.getDishById(this.dishId).pipe(take(1)).subscribe((response) => {
        this.dishData = response;
      })
    }
    else {
      this.dishData = _.cloneDeep(this.defaultDish);
    }
  }

  public addIngredient() {
    this.dishData.ingredientsList.push(_.cloneDeep(this.ingredient));
  }
  public removeIngredient(index: number) {
    this.dishData.ingredientsList.splice(index, 1);
  }
  public addStep() {
    this.dishData.steps.push('');
  }
  public removeStep(index: number) {
    this.dishData.steps.splice(index, 1);
  }
  public saveData() {
    if (this.dishId) {
      this.dishDatabaseService.addDish(this.dishData).pipe(take(1)).subscribe((response) => {
        this.goBackToList();
      })
    }
    else {
      this.dishDatabaseService.editDish(this.dishData).pipe(take(1)).subscribe((response) => {
        this.goBackToList();
      })
    }
  }

  public goBackToList() {
    this.router.navigate(['/dish'])
  }
}
