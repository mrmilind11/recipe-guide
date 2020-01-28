import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DishDifficultyRateComponent } from './components/dish-difficulty-rate/dish-difficulty-rate.component';
import { BlankDishImageDirective } from './directives/blank-dish-image.directive';
import { TextLimitPipe } from './pipes/text-limit.pipe';



@NgModule({
  declarations: [HeaderBarComponent, PageNotFoundComponent, DishDifficultyRateComponent, BlankDishImageDirective, TextLimitPipe],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeaderBarComponent, PageNotFoundComponent, DishDifficultyRateComponent, BlankDishImageDirective, TextLimitPipe]
})
export class SharedModule { }
