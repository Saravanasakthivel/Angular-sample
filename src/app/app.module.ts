import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';


@NgModule({
  imports:      [ BrowserModule,FontAwesomeModule,FormsModule ],
  declarations: [ AppComponent,ProductListComponent,ConvertToSpacesPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
