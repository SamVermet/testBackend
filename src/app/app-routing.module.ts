import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {MenuComponent} from "./menu/menu.component";
import {CategoriesComponent} from "./categories/categories.component";


const routes: Routes = [
  {path: '', redirectTo:'/menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompontents = [MenuComponent, CategoriesComponent, PagenotfoundComponent]
