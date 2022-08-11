import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule, routingCompontents} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupComponent } from './pages/groups/group/group.component';
import { ProductgroupsComponent } from './pages/productgroups/productgroups.component';
import { ProductgroupComponent } from './pages/productgroups/productgroup/productgroup.component';
import { ProductComponent } from './pages/productgroups/productgroup/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    routingCompontents,
    GroupsComponent,
    GroupComponent,
    ProductgroupsComponent,
    ProductgroupComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
