import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,FontAwesomeModule,FormsModule ],
  declarations: [ AppComponent,ProductListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
