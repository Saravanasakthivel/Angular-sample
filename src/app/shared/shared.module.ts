import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star-component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fasStar);


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
