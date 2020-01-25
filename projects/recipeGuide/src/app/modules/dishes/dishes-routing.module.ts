import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { DishesContainerComponent } from './components/dishes-container/dishes-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: DishesContainerComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'editrecipe/:id', component: AddEditRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
