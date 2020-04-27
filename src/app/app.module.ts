import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { faStar} from '@fortawesome/free-solid-svg-icons';
//library.add(faStar);

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

library.add(fasStar);








import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';



@NgModule({
  imports:      [ BrowserModule,FormsModule,FontAwesomeModule,HttpClientModule ],
  declarations: [ AppComponent,ProductListComponent,ConvertToSpacesPipe,StarComponent,ProductDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
