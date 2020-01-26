import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesContainerComponent } from './components/dishes-container/dishes-container.component';
import { DishesSideNavComponent } from './components/dishes-side-nav/dishes-side-nav.component';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { DishDetailsComponent } from './components/dish-details/dish-details.component';
import { AddEditDishComponent } from './components/add-edit-dish/add-edit-dish.component';


@NgModule({
  declarations: [DishesContainerComponent, DishesSideNavComponent, DishesListComponent, DishCardComponent, DishDetailsComponent, AddEditDishComponent],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DishesModule { }
