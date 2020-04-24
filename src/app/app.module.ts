import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  imports:      [ BrowserModule,FontAwesomeModule ],
  declarations: [ AppComponent,ProductListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
