import { AddEditDishComponent } from './components/add-edit-dish/add-edit-dish.component';
import { DishDetailsComponent } from './components/dish-details/dish-details.component';
import { DishesContainerComponent } from './components/dishes-container/dishes-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: DishesContainerComponent },
  { path: 'details/:id', component: DishDetailsComponent },
  { path: 'add', component: AddEditDishComponent },
  { path: 'edit/:id', component: AddEditDishComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
