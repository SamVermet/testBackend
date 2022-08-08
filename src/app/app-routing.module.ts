import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrinksListComponent} from "./drinks-list/drinks-list.component";
import {SnackListComponent} from "./snack-list/snack-list.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path: '', redirectTo:'/snacks', pathMatch: 'full'},
  {path: 'drinks', component: DrinksListComponent},
  {path: 'snacks', component: SnackListComponent},
  {path: 'test',component:TestComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompontents = [DrinksListComponent, SnackListComponent, PagenotfoundComponent]
