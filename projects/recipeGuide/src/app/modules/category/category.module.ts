import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryAddEditDialogComponent } from './components/category-add-edit-dialog/category-add-edit-dialog.component';


@NgModule({
  declarations: [CategoryContainerComponent, CategoryListComponent, CategoryCardComponent, CategoryAddEditDialogComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [CategoryAddEditDialogComponent]
})
export class CategoryModule { }
