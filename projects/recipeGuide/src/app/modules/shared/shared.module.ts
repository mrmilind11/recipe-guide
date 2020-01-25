import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DishDifficultyRateComponent } from './components/dish-difficulty-rate/dish-difficulty-rate.component';



@NgModule({
  declarations: [HeaderBarComponent, PageNotFoundComponent, DishDifficultyRateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeaderBarComponent, PageNotFoundComponent, DishDifficultyRateComponent]
})
export class SharedModule { }
