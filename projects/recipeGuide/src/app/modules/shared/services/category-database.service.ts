import { Observable, of, throwError } from 'rxjs';
import { CategoryModel } from './../../../models/category/category.model';
import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CategoryDatabaseService {
  /**************************************** Constructor **************************************/
  constructor() { }
  /**************************************** Properties ***************************************/
  private categoryList: CategoryModel[] = [];
  /**************************************** Methods ******************************************/
  public getCategoryList(): Observable<CategoryModel[]> {
    return of(_.cloneDeep(this.categoryList));
  }
  public addCategory(data: CategoryModel): Observable<CategoryModel> {
    let categoryToAdd = _.cloneDeep(data);
    categoryToAdd._id = new Date().getTime().toString();
    this.categoryList.push(categoryToAdd);
    return of(categoryToAdd);
  }
  public editCategory(data: CategoryModel): Observable<CategoryModel> {
    let catIndex = _.findIndex(this.categoryList, ['_id', data._id]);
    if (catIndex !== -1) {
      this.categoryList[catIndex] = _.cloneDeep(data);
      return of(data);
    }
    return throwError('No matching id found');
  }
  public deleteCategory(id: string): Observable<CategoryModel> {
    let catIndex = _.findIndex(this.categoryList, ['_id', id]);
    if (catIndex !== -1) {
      const categoryToDelete = _.cloneDeep(this.categoryList[catIndex]);
      this.categoryList.splice(catIndex, 1);
      return of(categoryToDelete);
    }
    return throwError('No matching id found');
  }
}
