import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) },
  { path: 'dish', loadChildren: () => import('./modules/dishes/dishes.module').then(m => m.DishesModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
