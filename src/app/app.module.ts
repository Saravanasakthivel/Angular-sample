import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';






import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  imports:      [ BrowserModule,FormsModule,AngularFontAwesomeModule ],
  declarations: [ AppComponent,ProductListComponent,ConvertToSpacesPipe,StarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
