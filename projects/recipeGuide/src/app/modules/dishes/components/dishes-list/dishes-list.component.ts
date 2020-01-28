import { DishModel } from './../../../../models/dishes/dish.model';
import { DishDatabaseService } from './../../../shared/services/dish-database.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit, OnDestroy {
  /************************************ Constructor *************************************/
  constructor(
    private dishDatabaseService: DishDatabaseService
  ) { }
  /************************************ Properties **************************************/
  public dishList: DishModel[] = [];
  private fetchDishSub = new Subscription();
  /************************************ Methods *****************************************/
  ngOnInit() {
    this.fetchDishList();
  }
  ngOnDestroy() {
    this.fetchDishSub.unsubscribe();
  }
  private fetchDishList() {
    this.fetchDishSub = this.dishDatabaseService.getDishList().subscribe((response) => {
      this.dishList = response;
    })
  }
  public onDelete(index) {
    this.dishList.splice(index, 1);
  }
  public trackByIndex(index: any): any {
    return index;
  }

}
