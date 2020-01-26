import { DishModel } from './../../../models/dishes/dish.model';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DishDatabaseService {
  /**************************************** Constructor **************************************/
  constructor() { }
  /**************************************** Properties ***************************************/
  private dishList: DishModel[] = [];
  /**************************************** Methods ******************************************/
  public getDishList(cat?: string): Observable<DishModel[]> {
    if (cat) {
      const filteredList = this.dishList.filter((obj) => {
        return obj.categories.indexOf(cat) !== -1;
      })
      return of(filteredList);
    }
    return of(this.dishList);
  }
  public getDishById(id): Observable<DishModel> {
    const dish = _.find(this.dishList, ['_id', id]);
    if (dish) {
      return of(dish);
    }
    return throwError('No matching id found');
  }
  public addDish(dish: DishModel): Observable<DishModel> {
    let dishToAdd = _.cloneDeep(dish);
    dishToAdd._id = new Date().getTime().toString();
    this.dishList.push(dishToAdd);
    return of(dishToAdd);
  }
  public editDish(dish: DishModel): Observable<DishModel> {
    let dishIndex = _.findIndex(this.dishList, ['_id', dish._id]);
    if (dishIndex !== -1) {
      this.dishList[dishIndex] = _.cloneDeep(dish);
      return of(dish);
    }
    return throwError('No matching id found');
  }
  public deleteDish(id: string): Observable<DishModel> {
    let dishIndex = _.findIndex(this.dishList, ['_id', id]);
    if (dishIndex !== -1) {
      const deletedDish = _.cloneDeep(this.dishList[dishIndex]);
      this.dishList.splice(dishIndex, 1);
      return of(deletedDish);
    }
    return throwError('No matching id found');
  }
}
