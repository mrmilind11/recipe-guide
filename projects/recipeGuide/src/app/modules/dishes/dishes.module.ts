import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesContainerComponent } from './components/dishes-container/dishes-container.component';
import { DishesSideNavComponent } from './components/dishes-side-nav/dishes-side-nav.component';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';


@NgModule({
  declarations: [DishesContainerComponent, DishesSideNavComponent, DishesListComponent, DishCardComponent, RecipeDetailsComponent, AddEditRecipeComponent],
  imports: [
    CommonModule,
    DishesRoutingModule
  ]
})
export class DishesModule { }
