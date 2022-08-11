import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {GroupsComponent} from "./pages/groups/groups.component";
import {GroupComponent} from "./pages/groups/group/group.component";
import {ProductgroupsComponent} from "./pages/productgroups/productgroups.component";
import {ProductgroupComponent} from "./pages/productgroups/productgroup/productgroup.component";
import {ProductComponent} from "./pages/productgroups/productgroup/product/product.component";


const routes: Routes = [
  {path: '', redirectTo: '/productgroups', pathMatch: 'full'},
  {
    path: 'groups',
    component: GroupsComponent,
    children: [
      {
        path: ':group',
        component: GroupComponent,
      },
    ]
  },

  {
    path: 'productgroups',
    component: ProductgroupsComponent,
    children: [
      {
        path: ':group',
        component: ProductgroupComponent,
        children: [
          {
            path: ':product',
            component: ProductComponent
          }
        ]
      }
    ]
  },


  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingCompontents = [ PagenotfoundComponent]
