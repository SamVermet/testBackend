import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule, routingCompontents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HighlightDirective} from './highlight.directive';
import {MenuComponent} from './menu/menu.component';
import {CategoriesComponent} from './categories/categories.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    routingCompontents,
    HighlightDirective,
    MenuComponent,
    CategoriesComponent
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
